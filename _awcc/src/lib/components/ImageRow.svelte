<script lang="ts">
	import type { Image } from "$lib/types";

    export let images: Image[]
</script>

<div>
    {#each images as {src, alt}}
        <img {src} {alt}>
    {/each}
</div>

<style lang="sass">
    div
        display: flex
        flex-direction: row
        column-gap: .1369rem
        height: 100%
        overflow-x: scroll 
    img
        max-block-size: 100%
        inline-size: auto
</style>