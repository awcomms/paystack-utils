<script lang="ts">
	import { navigating } from '$app/stores';

	import {
		InlineLoading,
		SkipToContent,
		Header
	} from 'carbon-components-svelte';
	import { isSideNavOpen } from './store';
</script>

<Header persistentHamburgerMenu={true} company="AngelWings Comprehensive College" bind:isSideNavOpen={$isSideNavOpen} href="/">
	{#if $navigating}
		<InlineLoading />
	{/if}
	<div slot="skip-to-content">
		<SkipToContent />
	</div>
</Header>


