// import { get } from 'svelte/store';
// import { token } from '$lib/store';
import { BACKEND_HTTP } from '$lib/env';

const json_or_string = (v: string) => {
	let res;
	try {
		res = JSON.parse(v);
	} catch {
		res = v;
	}
	return res;
};

export const http = <Type>(data: object, auth = false): Promise<Type> => {
	// const model_object = data[Object.keys(data)[0]];
	// if (auth) {
	// 	model_object[Object.keys(model_object)[0]].token = get(token);
	// }
	return fetch(`${BACKEND_HTTP}`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then((r) => {
		return r.text().then((_r) => json_or_string(_r));
	});
};
