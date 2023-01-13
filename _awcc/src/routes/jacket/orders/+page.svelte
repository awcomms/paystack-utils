<script lang="ts">
	import Sizes from '$lib/components/JacketOrder/Sizes.svelte';
	import { http } from '$lib/util';
	import { DataTable, Button } from 'carbon-components-svelte';
	import type { JacketOrder, Sizes as _Sizes, SearchOptions } from '../types';

	let orders: JacketOrder[] = [];
	let options: SearchOptions = {
		sizes: { sizes: { early_years: 0, junior: 0, intermediate: 0, senior: 0 }, join: 'Or' }
	};

	$: get(options);

	const get = async (..._: any[]) => {
		await http<JacketOrder[]>({ JacketOrder: { Search: { options } } }).then((r) => {
			orders = r;
		});
	};
</script>

{#if options.sizes}
	<Sizes bind:sizes={options.sizes.sizes} />
{/if}

{#each orders as order}
	<p>{order.name}</p>
{/each}
