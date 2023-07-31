import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } from '$env/static/private';
import {  createClient } from 'redis';

export const client = createClient({
	password: REDIS_PASSWORD,
	socket: {
		host: REDIS_HOST,
		port: Number(REDIS_PORT)
	}
});

await client.connect();

export {count} from './count.js'
export { create } from './create.js';
export { del } from './del.js';
export { exists } from './exists.js';
export { get } from './get.js';
export { json_array_index } from './json_array_index.js';
export { object_value } from './object_value.js';
export { search } from './search.js';
export { update } from './update.js';