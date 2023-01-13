// import { get } from 'svelte/store';
// import { token } from '$lib/store';
import { BACKEND_HTTP } from '$lib/env';

export const http = async <Type>(data: object, auth = false): Promise<Type> => {
	const model_object = data[Object.keys(data)[0]];
	// if (auth) {
	// 	model_object[Object.keys(model_object)[0]].token = get(token);
	// }
	return fetch(`${BACKEND_HTTP}/req`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(model_object)
	}).then((r) => {
		console.log(r)
        return r.text().then((_r) => {
            let res
			try {
				res = JSON.parse(_r);
			} catch {
				res = _r;
			}
			return res;
		});
	});
};
