import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

export { auth };