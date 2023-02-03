<script lang="ts">
	import { ImageRow } from '$lib/components';
	import { Column, Row } from 'carbon-components-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Row>
	<Column>
		<div class="all-list">
			<h1>{data.name}</h1>
			<p>{data.about}</p>
			<div class="images">
                <ImageRow images={data.images} />
            </div>
		</div>
	</Column>
</Row>

<style lang="sass">
    .images
        height: 167px
</style>
