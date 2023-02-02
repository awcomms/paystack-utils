<script lang="ts">
	export let text_images: TextImage[] = [];
	import { Row, Column } from 'carbon-components-svelte';
	import type { TextImage } from './types';
	import TextImagePair from './TextImagePair.svelte';
</script>

<Row>
	{#each text_images as text_image}
		<Column>
			<TextImagePair {...text_image} />
		</Column>
	{/each}
</Row>
