<script>
	import '$lib/fonts/fonts.css';
	import '$lib/app.css'
	import 'carbon-components-svelte/css/all.css';
	import { Content, Grid, Theme } from 'carbon-components-svelte';
	import Header from '$lib/components/_Nav/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SideNav from '$lib/components/_Nav/SideNav.svelte';
</script>

<Theme persist theme="white" />
<div class="all">
	<Header />
	<Content style="background: none; padding: 1rem">
		<SideNav />
		<Grid>
			<slot />
		</Grid>
	</Content>
	<div class="gap"></div>
	<Footer />
</div>

<style lang="scss">
	.gap {
		flex-grow: 1;
	}
	.all {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
