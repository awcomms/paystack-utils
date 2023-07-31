import { check_JSONPaths } from '$lib/util/check_JSONPaths.js';
import { client } from './index.js';
import { slim } from '$lib/util/redis/shape/slim.js';
import { shape } from '$lib/util/redis/shape/index.js';
import { is_object } from '$lib/util/is_object.js';

export const get = async <Type>(key: string, path: string[], slim_shape = true) => {
	const isPathRes = check_JSONPaths(path);
	if (!isPathRes.result) throw { message: 'not_path', ...isPathRes };
	const args: [string, { path: string[] }?] = [key];
	if (path) args.push({ path });
	return await client.json.get(...args).then((r) => {
		const shaped = is_object(r) ? (slim_shape ? slim(r) : shape(r)) : r;
		return shaped as Type;
	});
};
