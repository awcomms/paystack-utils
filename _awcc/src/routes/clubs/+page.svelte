<script lang="ts">
	import { Carousel, EachRow } from '$lib/components';
	import { Link } from 'carbon-components-svelte';

    import type {Club} from './types'

	import { clubs } from './clubs';
</script>

<h1>Clubs</h1>

<EachRow let:item items={clubs}>
	<Link href="clubs/{item.id}">
		<div class="item">
            <Carousel width={50} height={50} images={item.images} />
			<h2 class="name">{item.name}</h2>
			<p class="about">{item.description}</p>
		</div>
	</Link>
</EachRow>

<style lang="sass">
    .item
        display: flex
        flex-direction: column
        row-gap: 0.1369rem
    .name
        font-weght: bold
        word-break: normal

    img
        inline-size: 100%
        block-size: auto

    h2
        font-family: Allegro
        font-size: 1.369rem
</style>
