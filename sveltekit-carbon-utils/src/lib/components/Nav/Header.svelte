<script lang="ts">
	export let platformName: string, company: string, href: string;
	import { navigating, page } from '$app/stores';
	import { isSideNavOpen } from './store.js';
	import {
		InlineLoading,
		SkipToContent,
		Header,
		HeaderUtilities,
		HeaderAction,
		HeaderPanelLinks,
		HeaderPanelLink
	} from 'carbon-components-svelte';
	import Sun from 'carbon-icons-svelte/lib/Sun.svelte';
	import Moon from 'carbon-icons-svelte/lib/Moon.svelte';
	import { theme } from '$lib/util/theme_store.js';
	import { signIn, signOut } from '@auth/sveltekit/client';
	// import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';

	$: isOpen = false;
	$: icon = $theme === 'g100' ? Sun : Moon;
</script>

<Header
	persistentHamburgerMenu={true}
	{platformName}
	{company}
	bind:isSideNavOpen={$isSideNavOpen}
	{href}
>
	{#if $navigating}
		<InlineLoading />
	{/if}
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<!-- <slot name="header" /> -->
	<HeaderUtilities>
		<!-- <a
			href={$page.data.github_repo}
			rel="noopener noreferrer"
			target="_blank"
			class="bx--header__action logo"
		>
			<LogoGithub size={20} />
		</a> -->
		<slot name="header-utilities" />

		<HeaderAction
			on:click={(e) => {
				$theme = $theme === 'g100' ? 'white' : 'g100';
			}}
			on:open={(e) => {
				isOpen = false;
			}}
			bind:isOpen
			{icon}
			closeIcon={icon}
		/>

		<HeaderAction icon={UserAvatarFilledAlt} closeIcon={UserAvatarFilledAlt}>
			<HeaderPanelLinks>
				<slot name="panel-links" />
				<!-- {#if $page.data.session?.user}
					<HeaderPanelLink on:click={() => signOut()}>Log out: {$page.data.session.user.email}</HeaderPanelLink>
				{:else}
					<HeaderPanelLink on:click={() => signIn('google')}>Log in with Google</HeaderPanelLink>
				{/if} -->
			</HeaderPanelLinks>
		</HeaderAction>
	</HeaderUtilities>
</Header>

<!-- <style lang="sass">
	.logo
		display: flex
		align-items: center
		justify-content: center
		padding-bottom: 2px
</style> -->
