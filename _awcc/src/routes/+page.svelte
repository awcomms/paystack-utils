<script>
	import StoryEntry from '$lib/components/StoryEntry.svelte';
	import { Row, Column } from 'carbon-components-svelte';

	import students from '$lib/images/students.jfif';
	import bruh from '$lib/images/bruh.jfif';
	import chess from '$lib/images/chess.jfif';
	import playing from '$lib/images/playing.jfif';
</script>

<Row>
	<Column>
		<StoryEntry
			href="/bruh"
			src={bruh}
			alt="The school"
			text="Welcome to AngelWings Comprehensive College. Learn more about us"
		/>
	</Column>
	<Column>
		<StoryEntry
			href="/students"
			src={students}
			alt="Students in class"
			text="Our curriculum is awesome"
		/>
	</Column>
	<Column>
		<StoryEntry
			href="/students"
			src={playing}
			alt="Students in class"
			text="We love sports"
		/>
	</Column>
</Row>
<Row>
	<Column>
		<StoryEntry
			href="/bruh"
			src={chess}
			alt="The school"
			text="Gotta keep the minds sharp"
		/>
	</Column>
	<Column>
		<StoryEntry
			href="/students"
			src={students}
			alt="Students in class"
			text="Our curriculum is awesome"
		/>
	</Column>
	<Column>
		<StoryEntry
			href="/students"
			src={students}
			alt="Students in class"
			text="Our curriculum is awesome"
		/>
	</Column>
</Row>
