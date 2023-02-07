<script lang="ts">
	import { Link } from 'carbon-components-svelte';
	export let root: string;
</script>

<div class="all-list">
	<h1>Staff contacts</h1>

	<div class="all-list">
		<Link href="{root}teachers">Teachers</Link>
		<Link href="{root}admin">Administrative staff</Link>
		<Link href="{root}non">Non-Teacher staff</Link>
	</div>
</div>
