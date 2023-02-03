<script lang="ts">
	import { lorem } from '$lib/util';
	import { Column, DataTable, Row } from 'carbon-components-svelte';

	interface Event {
        id: number,
		name: string;
		about: string;
		date: Date;
	}

    let headers = [
        {key: 'name', value: 'Name'},
        {key: 'date', value: 'Date'}
    ]

	let rows: Event[] = [
		{ id: 1, name: 'Resumption', about: lorem(), date: new Date() },
		{ id: 2, name: 'InterHouse sports', about: lorem(), date: new Date() },
		{ id: 3, name: 'Revision', about: lorem(), date: new Date() },
		{ id: 4, name: 'Examination', about: lorem(), date: new Date() }
	];
</script>

<div class="all-list">
    <h1>Calendar</h1>
    
    <Row>
        <Column>
            <DataTable {headers} {rows} />
        </Column>
    </Row>
</div>

<style lang="sass">
    .event
        display: flex
        flex-direction: row
        align-items: top
        column-gap: 1rem
</style>
