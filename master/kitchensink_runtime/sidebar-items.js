window.SIDEBAR_ITEMS = {"constant":[["BABE_GENESIS_EPOCH_CONFIG","The BABE epoch configuration at genesis."],["MINER_MAX_ITERATIONS","Maximum number of iterations for balancing that will be executed in the embedded OCW miner of election provider multi phase."],["VERSION","Runtime version."],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""]],"enum":[["BalancesCall","Contains one variant per dispatchable that can be called by an extrinsic."],["HoldReason","A reason for placing a hold on funds."],["OriginCaller",""],["ProxyType","The type used to represent the kinds of proxying allowed."],["RuntimeCall",""],["RuntimeEvent",""],["RuntimeFreezeReason","A reason for placing a freeze on funds."],["RuntimeHoldReason","A reason for placing a hold on funds."],["RuntimeLockId","An identifier for each lock placed on funds."],["RuntimeSlashReason","A reason for slashing funds."],["StakerStatus","Indicates the initial status of the staker."],["SudoCall","Contains one variant per dispatchable that can be called by an extrinsic."],["SystemCall","Contains one variant per dispatchable that can be called by an extrinsic."]],"fn":[["native_version","Native version."],["wasm_binary_unwrap","Wasm binary unwrapped. If built with `SKIP_WASM_BUILD`, the function panics."]],"macro":[["add_benchmarks","Calls `add_benchmark` with all configs from `define_benchmarks` and passes the first two parameters on."],["list_benchmarks","Calls `list_benchmark` with all configs from `define_benchmarks` and passes the first two parameters on."]],"mod":[["api",""],["assets_api","Runtime API definition for assets. Runtime API definition for assets."],["constants","Constant values used within the runtime. A set of constant values used in substrate runtime."],["impls","Implementations of some helper traits passed into runtime modules as associated types. Some configurable implementations as associated type for the substrate runtime."]],"struct":[["AdjustmentVariable",""],["AlarmInterval",""],["AllianceMaxMembers",""],["AllianceMaxProposals",""],["AllianceMotionDuration",""],["AllyDeposit",""],["AnnouncementDepositBase",""],["AnnouncementDepositFactor",""],["ApprovalDeposit",""],["ApprovalsLimit",""],["AssetDeposit",""],["BagThresholds",""],["BalanceToU256",""],["BasicDeposit",""],["BetterUnsignedThreshold",""],["BlockHashCount",""],["BondingDuration",""],["BountyCuratorDeposit",""],["BountyDepositBase",""],["BountyDepositPayoutDelay",""],["BountyUpdatePeriod",""],["BountyValueMinimum",""],["Budget",""],["Burn",""],["CandidacyBond",""],["CandidateDeposit",""],["ChallengePeriod",""],["ChildBountyValueMinimum",""],["CollectionDeposit",""],["ConfigDepositBase",""],["CooloffPeriod",""],["CouncilMaxMembers",""],["CouncilMaxProposals",""],["CouncilMotionDuration",""],["CuratorDepositMax",""],["CuratorDepositMin",""],["CuratorDepositMultiplier",""],["CurrencyAdapter","Implements the transaction payment for a pallet implementing the `Currency` trait (eg. the pallet_balances) using an unbalance handler (implementing `OnUnbalanced`)."],["DataDepositPerByte",""],["DealWithFees",""],["DepositBase",""],["DepositFactor",""],["DepositPerByte",""],["DepositPerItem",""],["DesiredMembers",""],["DesiredRunnersUp",""],["ElectionProviderBenchmarkConfig","The numbers configured here could always be more than the the maximum limits of staking pallet to ensure election snapshot will not run out of memory. For now, we set them to smaller values since the staking is bounded and the weight pipeline takes hours for this single pallet."],["ElectionsPhragmenPalletId",""],["EnactmentPeriod",""],["EpochDuration",""],["ExistentialDeposit",""],["ExpectedBlockTime",""],["FastTrackVotingPeriod",""],["Features",""],["FieldDeposit",""],["FifoQueueLen",""],["FriendDepositFactor",""],["GenesisConfig",""],["HistoryDepth",""],["ImOnlineUnsignedPriority",""],["IndexDeposit",""],["IntakePeriod",""],["ItemAttributesApprovalsLimit",""],["ItemDeposit",""],["KeyLimit",""],["LaunchPeriod",""],["LotteryPalletId",""],["MaxActiveValidators",""],["MaxAdditionalFields",""],["MaxAllies",""],["MaxApprovals",""],["MaxAttributesPerCall",""],["MaxAuthorities",""],["MaxBalance",""],["MaxCalls",""],["MaxCandidateIntake",""],["MaxCandidates",""],["MaxDeadlineDuration",""],["MaxElectableTargets",""],["MaxElectingVoters",""],["MaxFellows",""],["MaxFriends",""],["MaxGenerateRandom",""],["MaxIntakeWeight",""],["MaxKeys",""],["MaxLockDuration",""],["MaxLocks",""],["MaxNominations",""],["MaxNominatorRewardedPerValidator",""],["MaxOnChainElectableTargets",""],["MaxOnChainElectingVoters",""],["MaxPeerDataEncodingSize",""],["MaxPeerInHeartbeats",""],["MaxPointsToBalance",""],["MaxProposals",""],["MaxQueueLen",""],["MaxRegistrars",""],["MaxReserves",""],["MaxSetIdSessionEntries",""],["MaxStrikes",""],["MaxSubAccounts",""],["MaxTips",""],["MaxVoters",""],["MaxVotesPerVoter",""],["MaximumMultiplier",""],["MaximumReasonLength",""],["MaximumSchedulerWeight",""],["MessageQueueServiceWeight","Allocate at most 20% of each block for message processing."],["MetadataDepositBase",""],["MetadataDepositPerByte",""],["MigrationMaxKeyLen",""],["MigrationSignedDepositBase",""],["MigrationSignedDepositPerItem",""],["MinBid",""],["MinReceipt",""],["MinVestedTransfer",""],["MinerMaxLength",""],["MinerMaxWeight",""],["MinimumDeposit",""],["MinimumMultiplier",""],["MinimumPeriod",""],["MultiPhaseUnsignedPriority",""],["NisBasePeriod",""],["NisHoldReason",""],["NisPalletId",""],["NominationPoolsPalletId",""],["NposSolution16",""],["OffchainRandomBalancing","A source of random balance for NposSolver, which is meant to be run by the OCW election miner."],["OffchainRepeat",""],["OffendingValidatorsThreshold",""],["OnChainSeqPhragmen",""],["OperationalFeeMultiplier",""],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["PeriodSpend",""],["PostUnbondPoolsWindow",""],["PreimageBaseDeposit",""],["PreimageByteDeposit",""],["PreimageMaxSize",""],["ProposalBond",""],["ProposalBondMinimum",""],["ProxyDepositBase",""],["ProxyDepositFactor",""],["QueueCount",""],["RecoveryDeposit",""],["ReportLongevity",""],["RetirementPeriod",""],["RewardCurve",""],["RotationPeriod",""],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["RuntimeBlockLength",""],["RuntimeBlockWeights",""],["RuntimeOrigin","The runtime origin type representing the origin of a call."],["SalaryForRank",""],["Schedule",""],["SessionKeys",""],["SessionsPerEra",""],["SignedDepositBase",""],["SignedDepositByte",""],["SignedPhase",""],["SignedRewardBase",""],["SlashDeferDuration",""],["SocietyPalletId",""],["SpendPeriod",""],["StakingBenchmarkingConfig",""],["StakingUnsignedPriority","We prioritize im-online heartbeats over election solution submission."],["StringLimit",""],["SubAccountDeposit",""],["SubmissionDeposit",""],["Target",""],["TargetBlockFullness",""],["TargetedFeeAdjustment","A struct to update the weight multiplier per block. It implements `Convert<Multiplier, Multiplier>`, meaning that it can convert the previous multiplier to the next one. This should be called on `on_finalize` of a block, prior to potentially cleaning the weight data from the system pallet."],["TechnicalMaxMembers",""],["TechnicalMaxProposals",""],["TechnicalMotionDuration",""],["TermDuration",""],["ThawThrottle",""],["TipCountdown",""],["TipFindersFee",""],["TipReportDepositBase",""],["TracksInfo",""],["TransactionByteFee",""],["TreasuryAccount",""],["TreasuryPalletId",""],["U256ToBalance",""],["UndecidingTimeout",""],["UnsignedPhase",""],["UnvestedFundsAllowedWithdrawReasons",""],["ValueLimit",""],["Version",""],["VoteLockingPeriod",""],["VotingBondBase",""],["VotingBondFactor",""],["VotingPeriod",""],["WrongSideDeduction",""]],"trait":[["BuildStorage","Complex storage builder stuff."]],"type":[["AccountId","Some way of identifying an account on the chain. We intentionally make it equivalent to the public key of our transaction signing scheme."],["Address","The address format for describing accounts."],["AllPallets","All pallets included in the runtime as a nested tuple of types."],["AllPalletsReversedWithSystemFirst","All pallets included in the runtime as a nested tuple of types in reversed order. With the system pallet first."],["AllPalletsWithSystem","All pallets included in the runtime as a nested tuple of types."],["AllPalletsWithSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order."],["AllPalletsWithoutSystem","All pallets included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllPalletsWithoutSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order. Excludes the System pallet."],["Alliance",""],["AllianceConfig",""],["AllianceMotion",""],["AllianceMotionConfig",""],["AssetRate",""],["AssetTxPayment",""],["Assets",""],["AssetsConfig",""],["AuthorityDiscovery",""],["AuthorityDiscoveryConfig",""],["Authorship",""],["Babe",""],["BabeConfig",""],["Balances",""],["BalancesConfig",""],["Block","Block type as expected by this runtime."],["BlockId","BlockId type as expected by this runtime."],["Bounties",""],["CheckedExtrinsic","Extrinsic type that has already been checked."],["ChildBounties",""],["Contracts",""],["ConvictionVoting",""],["CoreFellowship",""],["Council",""],["CouncilConfig",""],["Democracy",""],["DemocracyConfig",""],["ElectionProviderMultiPhase",""],["Elections",""],["ElectionsConfig",""],["Executive","Executive: handles dispatch to the various modules."],["FastUnstake",""],["Glutton",""],["Grandpa",""],["GrandpaConfig",""],["Header","Block header type as expected by this runtime."],["Historical",""],["Identity",""],["ImOnline",""],["ImOnlineConfig",""],["Indices",""],["IndicesConfig",""],["Lottery",""],["MessageQueue",""],["Mmr",""],["Multiplier","Fee multiplier."],["Multisig",""],["Nfts",""],["Nis",""],["NominationPools",""],["NominationPoolsConfig",""],["Offences",""],["Pov",""],["Preimage",""],["Proxy",""],["RandomnessCollectiveFlip",""],["RankedCollective",""],["RankedPolls",""],["Recovery",""],["Referenda",""],["Remark",""],["RootTesting",""],["Salary",""],["Scheduler",""],["Session",""],["SessionConfig",""],["Signature","Alias to 512-bit hash when used in the context of a transaction signature on the chain."],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The SignedExtension to the basic transaction logic."],["SignedPayload","The payload being signed in transactions."],["Society",""],["SocietyConfig",""],["Staking",""],["StakingConfig",""],["StateTrieMigration",""],["Sudo",""],["SudoConfig",""],["System",""],["SystemConfig",""],["TechnicalCommittee",""],["TechnicalCommitteeConfig",""],["TechnicalMembership",""],["TechnicalMembershipConfig",""],["Timestamp",""],["Tips",""],["TransactionPayment",""],["TransactionPaymentConfig",""],["TransactionStorage",""],["TransactionStorageConfig",""],["Treasury",""],["TreasuryConfig",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["Uniques",""],["Utility",""],["Vesting",""],["VestingConfig",""],["VoterList",""],["Whitelist",""]]};