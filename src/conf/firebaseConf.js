import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import conf from "./conf";

const firebaseconfig = {
	apiKey: conf.apiKey,
	authDomain: conf.authDomain,
	projectId: conf.projectId,
	storageBucket: conf.storageBucket,
	messagingSenderId: conf.messagingSenderId,
	appId: conf.appId,
};

const app = initializeApp(firebaseconfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage };