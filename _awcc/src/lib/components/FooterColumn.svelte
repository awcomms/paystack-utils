<script>
    import {Column} from 'carbon-components-svelte'
</script>

<Column>
    <div class="footer_column">
        <slot />
    </div>
</Column>

<style lang="sass">
    .footer_column
        display: flex
        flex-direction: column
        row-gap: 1.369rem
</style>