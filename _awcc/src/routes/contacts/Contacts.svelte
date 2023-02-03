<script lang="ts">
	import Contact from './Contact.svelte';
	import type { Contact as _Contact } from './types';

	export let contacts: _Contact[];
</script>

{#each contacts as contact}
	<Contact {contact} />
{/each}
