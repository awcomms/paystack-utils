<script>
	import { small } from '$lib/util';
	import { Link } from 'carbon-components-svelte';

	let rule_sets = ['Staff', 'Students', 'Whistle-blowing'];
</script>

<div class="all">
	<h1>Rule Categories</h1>

	{#each rule_sets as rs}
		<div class="all-list">
			<Link href="rules/{small(rs)}">
				{rs}
			</Link>
		</div>
	{/each}
</div>

<style lang="sass">
    .all
        display: flex
        flex-direction: column
        row-gap: 1.369rem
</style>
