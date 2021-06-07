import { writable } from 'svelte/store';
//import * as waxjs from '@waxio/waxjs/dist';

// TODO decouple user store from WCW integration and add Anchor support

//export const wax = new waxjs.WaxJS('https://wax.greymass.com', undefined, undefined, false);

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

// export const userStore = writable<IAccountStore>({
// 	account: '',
// 	loading: true,
// 	//client: wax,
// 	isLoggedIn: false
// });

function createUserStore() {
	const store = writable<IAccountStore>({
		account: '',
		loading: true,
		//client: wax,
		isLoggedIn: false
	});
	return {
		subscribe: store.subscribe,
		setAccount: (account: string) => {
			store.update((state) => ({ ...state, account }));
		}
	}
}

export const userStore = createUserStore();

// async function start(): Promise<void> {
// 	//console.log(userStore);
// 	try {
// 		userStore.update((state) => ({ ...state, loading: true }));
// 		const account = await autoLogin();
// 		setToSearch(account);
// 		userStore.update((state) => ({ ...state, account, isLoggedIn: true }));
// 	} catch (err) {
// 		console.warn(err);
// 	} finally {
// 		userStore.update((state) => ({ ...state, loading: false }));
// 	}
// }

//checks if autologin is available and calls the normal login function if it is
// async function autoLogin(): Promise<string> {
// 	const isAutoLoginAvailable = await wax.isAutoLoginAvailable();
// 	if (!isAutoLoginAvailable) {
// 		throw new Error('cannot autologin');
// 	}
// 	const account = await wax.login();
// 	console.log('autologin worked', account);
// 	return account as string;
// }

//normal login. Triggers a popup for non-whitelisted dapps
// export async function wcwLogin(): Promise<void> {
// 	try {
// 		userStore.update((state) => ({ ...state, loading: true }));
// 		const account = (await wax.login()) as string;
// 		userStore.update((state) => ({ ...state, account, isLoggedIn: true }));
// 		setToSearch(account);
// 	} catch (err) {
// 		console.log(err);
// 		userStore.update((state) => ({ ...state, error: err }));
// 	} finally {
// 		userStore.update((state) => ({ ...state, loading: false }));
// 	}
// }

/**
 * get account for query params
 */
export function getFromSearch(): string {
	const search = new URLSearchParams(document.location.search);
	return search.get('account') || '';
}

/**
 * get account for query params
 */
// export function setToSearch(account: string): void {
// 	const search = new URLSearchParams(document.location.search);
// 	search.set('account', account);
// 	history.pushState(null, document.title, '?' + search.toString());
// }

// export function setAccount(account: string): void {
// 	userStore.update((state) => ({ ...state, account }));
// 	setToSearch(account);
// }
