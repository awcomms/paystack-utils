import students from '$lib/images/students.jfif';
import bruh from '$lib/images/bruh.jfif';
import chess from '$lib/images/chess.jfif';
import playing from '$lib/images/playing.jfif';
import cook from '$lib/images/cook.png';
import event from '$lib/images/event.jpg';
import type { Club } from './types';
import { lorem } from '$lib/util';

const images = [students, bruh, chess, playing, cook, event].map(i => ({src: i, alt: "club activity depiction"}))

export const clubs: Club[] = [
	{
		id: 1,
		name: 'STEM',
		about: lorem(),
		description: 'Students explore STEM topics through hands-on projects and experiments',
		images
	},
	{
		id: 2,
		name: 'Art',
		about: lorem(),
		description: 'Students create visual art and explore different art styles',
		images
	},
	{
		id: 3,
		name: 'Drama',
		about: lorem(),
		description: 'Students perform dramatic skits and plays',
		images
	},
	{
		id: 4,
		name: 'Debate',
		about: lorem(),
		description: 'Studeabout: lorem(),nts practice public speaking and learn to argue their points of view',
		images
	},
	{
		id: 5,
		name: 'Music',
		about: lorem(),
		description: 'Studentabout: lorem(),s learn to play and compose music',
		images
	}
];
