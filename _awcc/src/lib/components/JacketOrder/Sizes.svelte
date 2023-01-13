<script lang="ts">
	export let sizes: Sizes;

	import { NumberInput } from 'carbon-components-svelte';
	import type { Sizes } from 'src/routes/jacket/types';
	interface SizeEntry {
		key: 'early_years' | 'junior' | 'intermediate' | 'senior';
		label: 'Early Years' | 'Junior' | 'Intermediate' | 'Senior';
	}
	let size_list: SizeEntry[] = [
		{ key: 'early_years', label: 'Early Years' },
		{ key: 'junior', label: 'Junior' },
		{ key: 'intermediate', label: 'Intermediate' },
		{ key: 'senior', label: 'Senior' }
	];
</script>

{#each size_list as size}
	<NumberInput label={size.label} bind:value={sizes[size.key]} />
{/each}
