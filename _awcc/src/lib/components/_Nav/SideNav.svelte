<script>
	import { SideNav, SideNavItems, SideNavMenu } from 'carbon-components-svelte';
	import SideNavLink from './SideNavLink.svelte';

	import { isSideNavOpen } from './store';

	import { createEventDispatcher } from 'svelte';
	import A2HsLink from './A2HSLink.svelte';

	const dispatch = createEventDispatcher();
</script>

<SideNav bind:isOpen={$isSideNavOpen}>
	<SideNavItems>
		<SideNavLink text="About" />
		<!-- <SideNavLink text="Events" />
		<SideNavLink text="Fees" />
		<SideNavLink text="Newsletter" />
		<SideNavLink text="Contact" />
		<SideNavMenu text="Extracurricular">
			<SideNavMenu text="Clubs">
				<SideNavLink menuItem text="JET" href="/extracurricular/clubs/jet" />
			</SideNavMenu>
			<SideNavLink menuItem text="Chess" href="/extracurricular/chess" />
			<SideNavLink menuItem text="Sports" href="/extracurricular/sports" />
		</SideNavMenu> -->
		<A2HsLink />
		<!-- {#if $user}
      <SideNavLink isSelected={$page.url.pathname === `/u/${$user.username}`} text="Me" href="/u/{$user.username}" />
      <SideNavLink href="/edit" text="Edit Profile" />
      <SideNavLink text="Exit" href={null} on:click={exit} />
    {/if} -->
	</SideNavItems>
</SideNav>
