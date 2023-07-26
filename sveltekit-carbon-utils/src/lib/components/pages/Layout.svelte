<script>
	import {
		Content,
		Grid,
		Theme
	} from 'carbon-components-svelte';
	import 'carbon-components-svelte/css/all.css';
	import Header from '$lib/components/Nav/Header.svelte'
	import SideNav from '$lib/components/Nav/SideNav.svelte'
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Notifications from '$lib/components/Notification/Notifications.svelte';

	inject({
		mode: dev
			? 'development'
			: 'production'
	});
</script>

<Notifications />

<Theme theme="g100" />	
<Header />
<Content
	style="background: none; padding: 1rem; height: 100%"
>
	<SideNav />
	<Grid>
		<slot />
	</Grid>
</Content>
