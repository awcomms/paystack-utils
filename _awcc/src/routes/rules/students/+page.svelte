<script>
	import { lorem } from '$lib/util';
	import { Accordion, AccordionItem } from 'carbon-components-svelte';

	let rs = ['Dressing', 'Attendance', 'Academics'];
</script>

<div class="all-list">
	<h1>Rules for students</h1>

	<Accordion>
		{#each rs as r}
			<AccordionItem title={r}>
				<p>{lorem(2)}</p>
			</AccordionItem>
		{/each}
	</Accordion>
</div>
