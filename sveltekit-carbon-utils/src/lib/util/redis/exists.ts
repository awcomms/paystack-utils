import type { RedisKey } from '$lib/types/index.js';
import { client } from './index.js';

export const exists = (id: RedisKey) => client.exists(id);
