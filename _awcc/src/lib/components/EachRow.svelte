<script lang="ts">
	import { Row, Column } from 'carbon-components-svelte';

	export let size = 3;
	export let items: any[] = [];

	let remainder = items.length % size;

	const chunk = (length: number) => {
		return items.reduce((array, current, index) => {
			let _new = index % length === 0;
			let last_index = array.length - 1;
			let sub;
			/**
			 * if _new index, create _new sub array
			 * else sub = last item from array
			 */
			if (_new) {
				sub = [];
			} else {
				sub = array[last_index];
			}
			sub.push(current);
			if (_new) {
				array.push(sub);
			} else {
				array[last_index] = sub;
			}
			return array;
			/**
			 *
			 */
		}, []);
	};

	let all = chunk(size);
</script>

<div class="all-list">
    {#each all as a}
        <Row>
            {#each a as _a}
                <Column>
                    <slot item={_a} />
                </Column>
            {/each}
            {#if a.length < 3}
                {#each Array(3 - a.length) as _}
                    <Column />
                {/each}
            {/if}
        </Row>
    {/each}
</div>
