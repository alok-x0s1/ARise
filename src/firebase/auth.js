import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	signInWithRedirect,
} from "firebase/auth";
import { auth, provider } from "../conf/firebaseConf";

export class AuthService {
	async createAccount({ email, password }) {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			return userCredential.user;
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async login({ email, password }) {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			return userCredential.user;
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async logout() {
		try {
			await signOut(auth);
		} catch (error) {
			console.log("Firebase Error :: logout :: error: ", error);
		}
	}

	async getCurrentUser() {
		try {
			const user = await new Promise((resolve) => {
				const unsubscribe = onAuthStateChanged(auth, (user) => {
					unsubscribe();
					resolve(user);
				});
			});
	
			return user || null;
		} catch (error) {
			return null;
		}
	}

	async registerWithGoogle() {
		try {
			const userCredential = await signInWithRedirect(auth, provider);
			return userCredential.user;
		} catch (error) {
			throw new Error(error.message);
		}
	}
}

const authService = new AuthService();
export default authService;