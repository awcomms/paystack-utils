<script lang="ts">
	import { small } from '$lib/util';
	import { Link } from 'carbon-components-svelte';

	let groups = ['Nursery', 'Primary', 'Junior Secondary'];
</script>

<div class="all-list">
	<h1>Curricula</h1>
	<div class="all-list">
		{#each groups as g}
			<Link href="curriculum/{small(g)}">{g}</Link>
		{/each}
	</div>
</div>
