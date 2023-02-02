<script lang='ts'>
    export let text = "", src = "", alt = ""

    import {Row, Column, ImageLoader, InlineLoading} from 'carbon-components-svelte'
	import Error from 'carbon-icons-svelte/lib/Error.svelte';
</script>

<Row>
    <Column>
        <p>{text}</p>
    </Column>
    <Column>
        <div class="image">
            <ImageLoader {alt} {src}>
                <svelte:fragment slot="loading">
                    <InlineLoading />
                </svelte:fragment>
                <svelte:fragment slot="error">
                    <Error />
                </svelte:fragment>
            </ImageLoader>
        </div>
    </Column>
</Row>

<style lang="sass">
    .image
        width: 100%
</style>