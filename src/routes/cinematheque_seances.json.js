import * as api from '$lib/api';

export async function get() {
	return {
		body: await api.get('PROG111%20Mars-mai%202022/PROG111%20Mars-mai%202022_SEANCES_DEF.json')
	};
}
