import { client } from '$lib/util/redis/index.js';

export const del = (id: string) => client.del(id);
