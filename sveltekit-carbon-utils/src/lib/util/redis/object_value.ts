import { get } from '$lib/util/redis/get.js';
import type { RedisKey } from '$lib/types/index.js';
import { is_object } from '$lib/util/is_object.js';

export const object_value = <Value>(key: RedisKey, sub_path: string, value_key: string) =>
	get<Record<string, Value>>(key, [`$.${sub_path}.${value_key}`]).then((r) =>
		r && is_object(r) ? r[value_key] : r
	);
