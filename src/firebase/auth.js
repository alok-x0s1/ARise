import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "../conf/firebaseConf";

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
			console.log("Firebase Error :: createUser :: error: ", error);
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
			console.log("Firebase Error :: login :: error: ", error);
			throw new Error(error.message);
		}
	}

	async logout() {
		try {
			await signOut(auth);
		} catch (error) {
			console.log("Firebase Error :: logout :: error: ", error);
			throw new Error(error.message);
		}
	}

	getCurrentUser() {
		return new Promise((resolve, reject) => {
			onAuthStateChanged(auth, (user) => {
				if (user) {
					resolve(user);
				} else {
					reject(new Error("No user is currently logged in."));
				}
			});
		});
	}
}

const authService = new AuthService();
export default authService;