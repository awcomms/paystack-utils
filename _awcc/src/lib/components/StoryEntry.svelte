<script lang="ts">
    import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte'
	import { Button } from "carbon-components-svelte";

    export let src: string, alt: string, text: string, href: string;
</script>

<div>
    <img {alt} {src}>
    <Button kind="ghost" {href} icon={ChevronRight}>{text}</Button>
</div>

<style lang="sass">
    div
        width: 100%
    img
        max-inline-size: 100%
        block-size: auto
</style>