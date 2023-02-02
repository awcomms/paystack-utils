<script>
	import Entry from './Entry.svelte';

	let entries = [
		{
			head: 'Our Vision',
			text: 'To be a world class academic institution, at the forefront of producing high flyers capable of making indelible marks in their chosen career and positive contributions to humanity through hardwork, commitment and responsible choices'
		},
		{
			head: 'Our Mission',
			text: 'To provide quality education, focusing on total development of the child in a stimulating environment where the specific learning need of every child counts'
		},
		{
			head: 'Our Philosophy',
			text: 'We firmly believe that every child, irrespective of gender, race or culture, is an individual with unique potentials for excellence and when exosed to stimulating learning experiences can acquire adequate knowledge and positive attitude to challenge his/her limit with a high sense of commitment, hardwork and responsibility and face the future with confidence'
		}
	];
</script>

{#each entries as entry}
	<Entry {...entry} />
{/each}
