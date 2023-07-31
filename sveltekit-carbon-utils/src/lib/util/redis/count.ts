import { client } from './index.js';

export const count = (index: string): Promise<number> =>
	client.ft.info(index).then((r) => {
		return Number(r.numDocs);
	});
