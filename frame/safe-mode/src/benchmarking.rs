// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//	 http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#![cfg(feature = "runtime-benchmarks")]

use super::{Pallet as SafeMode, *};

use frame_benchmarking::v2::*;
use frame_support::traits::{fungible::Mutate as FunMutate, UnfilteredDispatchable};
use frame_system::{Pallet as System, RawOrigin};
use sp_runtime::traits::{Bounded, One, Zero};

#[benchmarks(
	where T::Currency: FunMutate<T::AccountId>,
)]
mod benchmarks {
	use super::*;

	/// `on_initialize` exiting since the until block is in the past.
	#[benchmark]
	fn on_initialize_exit() {
		EnteredUntil::<T>::put(&T::BlockNumber::zero());
		assert!(SafeMode::<T>::is_entered());

		#[block]
		{
			SafeMode::<T>::on_initialize(1u32.into());
		}
	}

	/// `on_initialize` doing nothing.
	#[benchmark]
	fn on_initialize_noop() {
		#[block]
		{
			SafeMode::<T>::on_initialize(1u32.into());
		}
	}

	#[benchmark]
	fn enter() {
		let caller: T::AccountId = whitelisted_caller();
		let origin = RawOrigin::Signed(caller.clone());
		T::Currency::set_balance(&caller, BalanceOf::<T>::max_value() / 2u32.into());

		#[extrinsic_call]
		_(origin);

		assert_eq!(
			SafeMode::<T>::active_until().unwrap(),
			System::<T>::block_number() + T::EnterDuration::get()
		);
	}

	#[benchmark]
	fn force_enter() -> Result<(), BenchmarkError> {
		let force_origin =
			T::ForceEnterOrigin::try_successful_origin().map_err(|_| BenchmarkError::Weightless)?;
		let duration = T::ForceEnterOrigin::ensure_origin(force_origin.clone()).unwrap();
		let call = Call::<T>::force_enter {};

		#[block]
		{
			call.dispatch_bypass_filter(force_origin)?;
		}

		assert_eq!(SafeMode::<T>::active_until().unwrap(), System::<T>::block_number() + duration);
		Ok(())
	}

	#[benchmark]
	fn extend() {
		let caller: T::AccountId = whitelisted_caller();
		let origin = RawOrigin::Signed(caller.clone());
		T::Currency::set_balance(&caller, BalanceOf::<T>::max_value() / 2u32.into());

		System::<T>::set_block_number(1u32.into());
		assert!(SafeMode::<T>::enter(origin.clone().into()).is_ok());

		#[extrinsic_call]
		_(origin);

		assert_eq!(
			SafeMode::<T>::active_until().unwrap(),
			System::<T>::block_number() + T::EnterDuration::get() + T::ExtendDuration::get()
		);
	}

	#[benchmark]
	fn force_extend() -> Result<(), BenchmarkError> {
		let caller: T::AccountId = whitelisted_caller();
		let origin = RawOrigin::Signed(caller.clone());
		T::Currency::set_balance(&caller, BalanceOf::<T>::max_value() / 2u32.into());

		System::<T>::set_block_number(1u32.into());
		assert!(SafeMode::<T>::enter(origin.clone().into()).is_ok());

		let force_origin = T::ForceExtendOrigin::try_successful_origin()
			.map_err(|_| BenchmarkError::Weightless)?;
		let extension = T::ForceExtendOrigin::ensure_origin(force_origin.clone()).unwrap();
		let call = Call::<T>::force_extend {};

		#[block]
		{
			call.dispatch_bypass_filter(force_origin)?;
		}

		assert_eq!(
			SafeMode::<T>::active_until().unwrap(),
			System::<T>::block_number() + T::EnterDuration::get() + extension
		);
		Ok(())
	}

	#[benchmark]
	fn force_exit() -> Result<(), BenchmarkError> {
		let caller: T::AccountId = whitelisted_caller();
		let origin = RawOrigin::Signed(caller.clone());
		T::Currency::set_balance(&caller, BalanceOf::<T>::max_value() / 2u32.into());

		assert!(SafeMode::<T>::enter(origin.clone().into()).is_ok());

		let force_origin =
			T::ForceExitOrigin::try_successful_origin().map_err(|_| BenchmarkError::Weightless)?;
		let call = Call::<T>::force_exit {};

		#[block]
		{
			call.dispatch_bypass_filter(force_origin)?;
		}

		assert_eq!(SafeMode::<T>::active_until(), None);
		Ok(())
	}

	#[benchmark]
	fn release_stake() -> Result<(), BenchmarkError> {
		let caller: T::AccountId = whitelisted_caller();
		let origin = RawOrigin::Signed(caller.clone());
		T::Currency::set_balance(&caller, BalanceOf::<T>::max_value() / 2u32.into());

		let entered_at_block: T::BlockNumber = System::<T>::block_number();
		assert!(SafeMode::<T>::enter(origin.clone().into()).is_ok());
		let current_stake = Stakes::<T>::get(&caller, entered_at_block).unwrap_or_default();
		assert_eq!(current_stake, T::EnterStakeAmount::get().unwrap());
		assert_eq!(
			T::Currency::balance(&caller),
			BalanceOf::<T>::max_value() / 2u32.into() - T::EnterStakeAmount::get().unwrap()
		);

		let force_origin =
			T::ForceExitOrigin::try_successful_origin().map_err(|_| BenchmarkError::Weightless)?;
		assert!(SafeMode::<T>::force_exit(force_origin.clone()).is_ok());

		System::<T>::set_block_number(
			System::<T>::block_number() + T::ReleaseDelay::get().unwrap() + One::one(),
		);
		System::<T>::on_initialize(System::<T>::block_number());
		SafeMode::<T>::on_initialize(System::<T>::block_number());

		let call =
			Call::<T>::release_stake { account: caller.clone(), block: entered_at_block.clone() };

		#[block]
		{
			call.dispatch_bypass_filter(origin.into())?;
		}

		assert!(!Stakes::<T>::contains_key(&caller, entered_at_block));
		assert_eq!(T::Currency::balance(&caller), BalanceOf::<T>::max_value() / 2u32.into());
		Ok(())
	}

	#[benchmark]
	fn force_release_stake() -> Result<(), BenchmarkError> {
		let caller: T::AccountId = whitelisted_caller();
		let origin = RawOrigin::Signed(caller.clone());
		T::Currency::set_balance(&caller, BalanceOf::<T>::max_value() / 2u32.into());

		let entered_at_block: T::BlockNumber = System::<T>::block_number();
		assert!(SafeMode::<T>::enter(origin.clone().into()).is_ok());
		let current_stake = Stakes::<T>::get(&caller, entered_at_block).unwrap_or_default();
		assert_eq!(current_stake, T::EnterStakeAmount::get().unwrap());
		assert_eq!(
			T::Currency::balance(&caller),
			BalanceOf::<T>::max_value() / 2u32.into() - T::EnterStakeAmount::get().unwrap()
		);

		// TODO
		let force_origin =
			T::ForceExitOrigin::try_successful_origin().map_err(|_| BenchmarkError::Weightless)?;
		assert!(SafeMode::<T>::force_exit(force_origin.clone()).is_ok());

		System::<T>::set_block_number(System::<T>::block_number() + One::one());
		System::<T>::on_initialize(System::<T>::block_number());
		SafeMode::<T>::on_initialize(System::<T>::block_number());

		let release_origin =
			T::StakeSlashOrigin::try_successful_origin().map_err(|_| BenchmarkError::Weightless)?;
		let call = Call::<T>::force_release_stake {
			account: caller.clone(),
			block: entered_at_block.clone(),
		};

		#[block]
		{
			call.dispatch_bypass_filter(release_origin)?;
		}

		assert!(!Stakes::<T>::contains_key(&caller, entered_at_block));
		assert_eq!(T::Currency::balance(&caller), BalanceOf::<T>::max_value() / 2u32.into());
		Ok(())
	}

	#[benchmark]
	fn force_slash_stake() -> Result<(), BenchmarkError> {
		// FAIL-CI disable if uncallable
		let caller: T::AccountId = whitelisted_caller();
		let origin = RawOrigin::Signed(caller.clone());
		T::Currency::set_balance(&caller, BalanceOf::<T>::max_value() / 2u32.into());

		let entered_at_block: T::BlockNumber = System::<T>::block_number();
		assert!(SafeMode::<T>::enter(origin.clone().into()).is_ok());
		let current_stake = Stakes::<T>::get(&caller, entered_at_block).unwrap_or_default();
		assert_eq!(current_stake, T::EnterStakeAmount::get().unwrap());
		assert_eq!(
			T::Currency::balance(&caller),
			BalanceOf::<T>::max_value() / 2u32.into() - T::EnterStakeAmount::get().unwrap()
		);

		// TODO
		let force_origin =
			T::ForceExitOrigin::try_successful_origin().map_err(|_| BenchmarkError::Weightless)?;
		assert!(SafeMode::<T>::force_exit(force_origin.clone()).is_ok());

		let release_origin =
			T::StakeSlashOrigin::try_successful_origin().map_err(|_| BenchmarkError::Weightless)?;
		let call = Call::<T>::force_slash_stake {
			account: caller.clone(),
			block: entered_at_block.clone(),
		};

		#[block]
		{
			call.dispatch_bypass_filter(release_origin)?;
		}

		assert!(!Stakes::<T>::contains_key(&caller, entered_at_block));
		assert_eq!(
			T::Currency::balance(&caller),
			BalanceOf::<T>::max_value() / 2u32.into() - T::EnterStakeAmount::get().unwrap()
		);
		Ok(())
	}

	impl_benchmark_test_suite!(SafeMode, crate::mock::new_test_ext(), crate::mock::Test);
}