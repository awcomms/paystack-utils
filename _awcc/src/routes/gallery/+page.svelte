<script>
	import students from '$lib/images/students.jfif';
	import bruh from '$lib/images/bruh.jfif';
	import chess from '$lib/images/chess.jfif';
	import playing from '$lib/images/playing.jfif';
	import cook from '$lib/images/cook.png';
	import event from '$lib/images/event.jpg';

    import Gallery from 'svelte-gallery'

	let images = [students, bruh, chess, playing, bruh, chess, playing, cook, event].map(i => ({src: i, width: 300, height: 300}))
</script>

<Gallery {images} />