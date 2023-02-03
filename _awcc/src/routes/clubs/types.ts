import type { Image } from "$lib/types";

export interface Club {
    id: number,
	name: string;
    about: string;
    description: string,
	images: Image[];
}
