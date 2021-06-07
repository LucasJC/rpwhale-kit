import { writable } from 'svelte/store';
//import * as waxjs from '@waxio/waxjs/dist';

// TODO decouple user store from WCW integration and add Anchor support

// export function wcw(): any {
// 	return new waxjs.WaxJS('https://wax.greymass.com', undefined, undefined, false);
// };
export interface IAccountStore {
	account: string;
	loading: boolean;
	error?: string;
	/* this indicates if the user manually inputed the account
	 * or if she actually logged in
	 */
	isLoggedIn: boolean;
	//client: waxjs.WaxJS;
}

function createUserStore() {
	const internalStore = writable<IAccountStore>({
		account: '',
		loading: false,
		//client: wax,
		isLoggedIn: false
	});
	return {
		subscribe: internalStore.subscribe,
		setAccount: (account: string) => {
			internalStore.update((state) => ({ ...state, account }));
		},
		internal: internalStore
	};
}

export const userStore = createUserStore();

//normal login. Triggers a popup for non-whitelisted dapps
// export async function wcwLogin(): Promise<void> {
// 	try {
// 		userStore.internal.update((state) => ({ ...state, loading: true }));
// 		const account = (await wcw().login()) as string;
// 		userStore.internal.update((state) => ({ ...state, account, isLoggedIn: true }));
// 	} catch (err) {
// 		console.log(err);
// 		userStore.internal.update((state) => ({ ...state, error: err }));
// 	} finally {
// 		userStore.internal.update((state) => ({ ...state, loading: false }));
// 	}
// }