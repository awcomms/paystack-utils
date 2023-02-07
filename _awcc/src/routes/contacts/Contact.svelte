<script lang="ts">
	import { Accordion, AccordionItem } from 'carbon-components-svelte';
	import { Email, Phone } from 'carbon-icons-svelte';
	import type { Contact } from './types';

	export let contact: Contact;
</script>

<Accordion align="end">
	<AccordionItem title="{contact.name}{contact._class ? ' - ' + contact._class + ' teacher' : ''}">
		<div class="all-list">
			<div class="link">
				<Email />
				<p>{contact.email}</p>
			</div>
			<div class="link">
				<Phone />
				<p>{contact.phone}</p>
			</div>
			<!-- <div class="link"></div> -->
		</div>
	</AccordionItem>
</Accordion>

<style lang="scss">
	.link {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 1.369rem;
	}
</style>
