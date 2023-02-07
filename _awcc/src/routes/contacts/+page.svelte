<script lang="ts">
	import { Column, MultiSelect, Row } from 'carbon-components-svelte';
	import Contact from './Contact.svelte';
	import contacts from './contacts.json';

	let selected_types: import('carbon-components-svelte/types/MultiSelect/MultiSelect.svelte').MultiSelectItemId[] = [];
	let selected_classes: import('carbon-components-svelte/types/MultiSelect/MultiSelect.svelte').MultiSelectItemId[] = [];

	const check_selected_types = (i: number) =>
		selected_types.length && selected_types.find((d) => d.text === i);
	const check_selected_classes = (i: number) =>
		selected_classes.length && selected_classes.find((d) => d.text === i);

	let classes = [
		'Nursery 1',
		'Nursery 2',
		'Grade 1',
		'Grade 2',
		'Grade 3',
		'Grade 4',
		'Grade 5',
		'JS1',
		'JS2'
	].map((text, id) => ({ id, text }));

	let staff_types = ['Teacher', 'Non-Teacher', 'Administrative'].map((text, id) => ({
		id,
		text
	}));
</script>

<div class="all-list">
	<Row>
		<Column>
			<MultiSelect
				titleText="Staff type"
				label="Select a staff type"
				items={staff_types}
				bind:selectedIds={selected_types}
			/>
		</Column>
		<Column>
			<MultiSelect
				titleText="Class"
				label="Select the class a teacher may teach or be associated with"
				items={classes}
				bind:selectedIds={selected_classes}
			/>
		</Column>
	</Row>
	
	<Row>
		<Column>
			{#each contacts as contact}
				<!-- {#if check_selected_types(contact._type) && check_selected_classes(contact._class)} -->
					<Contact {contact} />
				<!-- {/if} -->
			{/each}
		</Column>
	</Row>
</div>
