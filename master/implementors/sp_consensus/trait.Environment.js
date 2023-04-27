(function() {var implementors = {
"sc_basic_authorship":[["impl&lt;A, B, Block, C, PR&gt; <a class=\"trait\" href=\"sp_consensus/trait.Environment.html\" title=\"trait sp_consensus::Environment\">Environment</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_basic_authorship/struct.ProposerFactory.html\" title=\"struct sc_basic_authorship::ProposerFactory\">ProposerFactory</a>&lt;A, B, C, PR&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: TransactionPool&lt;Block = Block&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.2/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.2/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"sc_block_builder/trait.BlockBuilderProvider.html\" title=\"trait sc_block_builder::BlockBuilderProvider\">BlockBuilderProvider</a>&lt;B, Block, C&gt; + <a class=\"trait\" href=\"sp_blockchain/backend/trait.HeaderBackend.html\" title=\"trait sp_blockchain::backend::HeaderBackend\">HeaderBackend</a>&lt;Block&gt; + ProvideRuntimeApi&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.2/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.2/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::Api: ApiExt&lt;Block, StateBackend = <a class=\"type\" href=\"sc_client_api/backend/type.StateBackendFor.html\" title=\"type sc_client_api::backend::StateBackendFor\">StateBackendFor</a>&lt;B, Block&gt;&gt; + BlockBuilderApi&lt;Block&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;PR: <a class=\"trait\" href=\"sp_consensus/trait.ProofRecording.html\" title=\"trait sp_consensus::ProofRecording\">ProofRecording</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()