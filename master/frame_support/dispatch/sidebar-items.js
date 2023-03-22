window.SIDEBAR_ITEMS = {"derive":[["Decode","Derive `parity_scale_codec::Decode` and for struct and enum."],["Encode","Derive `parity_scale_codec::Encode` and `parity_scale_codec::EncodeLike` for struct and enum."],["MaxEncodedLen","Derive `parity_scale_codec::MaxEncodedLen` for struct and enum."],["RuntimeDebug",""],["TypeInfo",""]],"enum":[["DispatchClass","A generalized group of dispatch types."],["DispatchError","Reason why a dispatch call failed."],["Pays","Explicit enum to denote if a transaction pays fee or not."],["RawOrigin","Origin for the System pallet."]],"fn":[["extract_actual_pays_fee","Extract the actual pays_fee from a dispatch result if any or fall back to the default weight."],["extract_actual_weight","Extract the actual weight from a dispatch result if any or fall back to the default weight."]],"macro":[["Clone","Derive macro generating an impl of the trait `Clone`."],["Eq","Derive macro generating an impl of the trait `Eq`."],["PartialEq","Derive macro generating an impl of the trait `PartialEq`."]],"mod":[["fmt","Utilities for formatting and printing `String`s."],["marker","Primitive traits and types representing basic properties of types."],["result","Error handling with the `Result` type."]],"struct":[["CallMetadata","The function and pallet name of the Call."],["DispatchInfo","A bundle of static information collected from the `#[pallet::weight]` attributes."],["PerDispatchClass","A struct holding value for each `DispatchClass`."],["PostDispatchInfo","Weight information that is only available post dispatch. NOTE: This can only be used to reduce the weight or fee, not increase it."],["Vec","A contiguous growable array type, written as `Vec<T>`, short for ‘vector’."],["Weight",""]],"trait":[["Callable","Serializable version of pallet dispatchable."],["ClassifyDispatch","Means of classifying a dispatchable function."],["Clone","A common trait for the ability to explicitly duplicate an object."],["Codec","Trait that allows zero-copy read/write of value-references to/from slices in LE format."],["Decode","Trait that allows zero-copy read of value-references from slices in LE format."],["Dispatchable","A lazy call (module function and argument values) that can be executed via its `dispatch` method."],["Encode","Trait that allows zero-copy write of value-references to slices in LE format."],["EncodeAsRef","Something that can be encoded as a reference."],["EncodeLike","A marker trait that tells the compiler that a type encode to the same representation as another type."],["Eq","Trait for equality comparisons which are equivalence relations."],["GetCallIndex","Gets the function index of the Call."],["GetCallMetadata","Gets the metadata for the Call - function name and pallet name."],["GetCallName","Gets the function name of the Call."],["GetDispatchInfo","A `Dispatchable` function (aka transaction) that can carry some static information along with it, using the `#[pallet::weight]` attribute."],["GetStorageVersion","Provides information about the storage version of a pallet."],["HasCompact","Trait that tells you if a given type can be encoded/decoded in a compact way."],["Input","Trait that allows reading of data into a slice."],["MaxEncodedLen","Items implementing `MaxEncodedLen` have a statically known maximum encoded size."],["OneOrMany","A trait that represents one or many values of given type."],["Output","Trait that allows writing of data."],["Parameter","A type that can be used as a parameter in a dispatchable function."],["PartialEq","Trait for equality comparisons which are partial equivalence relations."],["PaysFee","Indicates if dispatch function should pay fees or not."],["TypeInfo","Implementors return their meta type information."],["UnfilteredDispatchable","Type that can be dispatched with an origin but without checking the origin filter."],["WeighData","Means of weighing some particular kind of data (`T`)."],["WithPostDispatchInfo","Allows easy conversion from `DispatchError` to `DispatchErrorWithPostInfo` for dispatchables that want to return a custom a posterior weight on error."]],"type":[["CallableCallFor",""],["DispatchErrorWithPostInfo","The error type contained in a `DispatchResultWithPostInfo`."],["DispatchResult","Unaugmented version of `DispatchResultWithPostInfo` that can be returned from dispatchable functions and is automatically converted to the augmented type. Should be used whenever the `PostDispatchInfo` does not need to be overwritten. As this should be the common case it is the implicit return type when none is specified."],["DispatchResultWithPostInfo","The return type of a `Dispatchable` in frame. When returned explicitly from a dispatchable function it allows overriding the default `PostDispatchInfo` returned from a dispatch."],["TransactionPriority","Priority for a transaction. Additive. Higher is better."]]};