<script lang="ts">
	import { Accordion, AccordionItem } from 'carbon-components-svelte';

	interface Rule {
		title: string;
		text: string;
	}

	let rules: Rule[] = [
		{
			title: 'Dress Code',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod aliquam, ipsum sapiente odit possimus iure pariatur exercitationem ea consequatur tenetur quibusdam voluptas temporibus tempora quas consectetur ad vero optio.'
		},
		{
			title: 'Dress Code',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod aliquam, ipsum sapiente odit possimus iure pariatur exercitationem ea consequatur tenetur quibusdam voluptas temporibus tempora quas consectetur ad vero optio.'
		},
		{
			title: 'Dress Code',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod aliquam, ipsum sapiente odit possimus iure pariatur exercitationem ea consequatur tenetur quibusdam voluptas temporibus tempora quas consectetur ad vero optio.'
		},
		{
			title: 'Dress Code',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod aliquam, ipsum sapiente odit possimus iure pariatur exercitationem ea consequatur tenetur quibusdam voluptas temporibus tempora quas consectetur ad vero optio.'
		}
	];
</script>

<div class="all">
    <h1>Staff Rules</h1>
    
    <Accordion
        >{#each rules as { title, text }}
            <AccordionItem {title}>
                <p>{text}</p>
            </AccordionItem>
        {/each}</Accordion
    >
</div>

<style lang="sass">
    .all
        display: flex
        flex-direction: column
        row-gap: 1.369rem
</style>
