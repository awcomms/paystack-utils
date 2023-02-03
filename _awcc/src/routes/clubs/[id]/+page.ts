import type { Club } from "../types";
import type { PageLoad } from "./$types";
import {clubs} from '../clubs'
import { error } from "@sveltejs/kit";

export const load = (({ params }) => {
    const id = params.id
    const club = clubs.find((c: Club) => c.id === Number(id))

    if (!club) throw error(404, `Club with id ${id} not found`)

    return club
}) satisfies PageLoad