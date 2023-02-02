<script lang="ts">
    export let href = "", text = "", icon: ConstructorOfATypedSvelteComponent

    import {Link} from 'carbon-components-svelte'
</script>

<div class="box">
    <Link style="display:block" {href}>
        <div class="quick_link">
            <svelte:component this={icon} size="64" />
            <div class="text">{text}</div>
        </div>
    </Link>
</div>

<style lang="sass">
    @use '@carbon/colors'

    .box
        padding: 1.369rem 0

    .text
        text-align: center

    .quick_link
        display: flex
        flex-direction: column
        align-items: center
        row-gap: .37rem
        text-decoration: none
</style>

