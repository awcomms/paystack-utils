<script lang="ts">
	import StoryEntry from '$lib/components/StoryEntry.svelte';
	import { Row, Column } from 'carbon-components-svelte';

	import students from '$lib/images/students.jfif';
	import bruh from '$lib/images/bruh.jfif';
	import chess from '$lib/images/chess.jfif';
	import playing from '$lib/images/playing.jfif';
	import cook from '$lib/images/cook.png';
	import event from '$lib/images/event.jpg';

	import Email from 'carbon-icons-svelte/lib/Email.svelte';
	import Rule from 'carbon-icons-svelte/lib/Rule.svelte';
	import Policy from 'carbon-icons-svelte/lib/Policy.svelte';
	import Activity from 'carbon-icons-svelte/lib/Activity.svelte';
	import Calendar from 'carbon-icons-svelte/lib/Calendar.svelte';
	import TextAlignLeft from 'carbon-icons-svelte/lib/TextAlignLeft.svelte';
	import TextAlignCenter from 'carbon-icons-svelte/lib/TextAlignCenter.svelte';
	import Music from 'carbon-icons-svelte/lib/Music.svelte';
	import CurrencyDollar from 'carbon-icons-svelte/lib/CurrencyDollar.svelte';
	import Image from 'carbon-icons-svelte/lib/Image.svelte';
	import QuickLink from '$lib/components/QuickLink.svelte';

	import type { TextImage as _TextImage } from '$lib/components/types';
	import TextImageRow from '$lib/components/TextImageRow.svelte';

	let text_images: _TextImage[] = [
		{
			src: students,
			alt: 'Students in a classroom',
			text: 'We follow a philosphy of every child is a winner'
		},
		{
			src: chess,
			alt: 'Students playing chess',
			text: 'We take a unique approach to developing the mind of every child'
		},
		{
			src: event,
			alt: 'Awesome',
			text: 'Awesome'
		}
	];

	let quick_links: import('$lib/components/types').QuickLink[] = [
		{
			href: '/about',
			text: 'About Us',
			icon: TextAlignCenter
		},
		{
			href: '/fees',
			text: 'Fees',
			icon: CurrencyDollar
		},
		{
			href: '/calendar',
			text: 'Calendar',
			icon: Calendar
		},
		{
			href: '/gallery',
			text: 'Gallery',
			icon: Image
		},
		{
			href: '/clubs',
			text: 'Clubs',
			icon: Activity
		},
		{
			href: '/contacts',
			text: 'Contacts',
			icon: Email
		},
		{
			href: '/rules',
			text: 'Rules',
			icon: Rule
		},
		{
			href: '/curriculum',
			text: 'Curriculum',
			icon: TextAlignLeft
		}

		// {
		// 	href: '/extracurricular',
		// 	text: 'Extracurricular',
		// 	icon: Music
		// }
	];
</script>

<div class="all">
	<div class="welcome">Welcome to AngelWings Comprehensive College</div>
	<div>
		AngelWings Comprehensive College is an educational institution located in Kubwa, Abuja
		comprising of a Nursery school, Primary school, and a Junior Secondary School
	</div>

	<Row>
		{#each quick_links.slice(0, 3) as link}
			<Column>
				<QuickLink {...link} />
			</Column>
		{/each}
	</Row>
	<Row>
		{#each quick_links.slice(3, 6) as link}
			<Column>
				<QuickLink {...link} />
			</Column>
		{/each}
	</Row>
	<Row>
		{#each quick_links.slice(6) as link}
			<Column>
				<QuickLink {...link} />
			</Column>
		{/each}
	</Row>
</div>

<style lang="sass">
	// @use '@carbon/type'

	.all
		display: flex
		flex-direction: column
		row-gap: 1.369rem


	.divide_header
		text-align: center

	.quick_links
		display: flex
		flex-direction: column
		row-gap: .37rem

	.welcome
		font-family: "Allegro"
		font-weght: 600
		font-size: 37px
		// @include type.type-style('fluid-heading-06')
</style>
