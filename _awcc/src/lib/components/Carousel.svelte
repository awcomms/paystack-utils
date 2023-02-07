<script lang="ts">
	import type { Image } from '$lib/types';

	export let timeout: number = 1369,
		width = 37,
		height = 37,
		images: Image[] = [];

	let current_index = 0;

	const shift = () => {
		++current_index;
	};

	setInterval(() => {
		shift();
	}, timeout);
</script>

<img {width} {height} {...images[current_index]} />

<style lang="sass">
    img
        inline-size: 100%
        block-size: auto
</style>
