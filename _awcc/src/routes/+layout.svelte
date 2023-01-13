<script>
	import 'carbon-components-svelte/css/all.css';
	import { Content, Grid, Theme } from 'carbon-components-svelte';
</script>

<Theme persist theme="white" />
<Content style="background: none; padding: 1rem">
	<Grid>
		<slot />
	</Grid>
</Content>
