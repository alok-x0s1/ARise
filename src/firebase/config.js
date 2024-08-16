import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../conf/firebaseConf";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	setDoc,
	where,
} from "firebase/firestore";

export class Service {
	async createProduct({
		name,
		description,
		price,
		image,
		id,
		ratings,
		modelFile,
	}) {
		try {
			const imagePath = await this.uploadImage(image);
			const modelPath = await this.uploadImage(modelFile);

			const imageUrl = await this.getImage(imagePath);
			const modelUrl = await this.getImage(modelPath);
			const product = await addDoc(collection(db, "products"), {
				id,
				name,
				description,
				price: Number(price),
				image: imageUrl,
				modelUrl,
				ratings: Number(ratings),
				// user: {
				//     userId: user.id,
				//     name: user.displayName,
				//     email: user.email,
				//     photoURL: user.photoURL,
				// }
			});

			return product;
		} catch (error) {
			console.log("Firebase Error :: createProduct :: error: ", error);
		}
	}

	async uploadImage(image) {
		try {
			const imageRef = ref(
				storage,
				`uploads/images/${Date.now()}-${image.name}`
			);
			const uploadResult = await uploadBytes(imageRef, image);

			return uploadResult.ref.fullPath;
		} catch (error) {
			console.log("Firebase Error :: uploadImage :: error: ", error);
			return null;
		}
	}

	async getAllProducts() {
		try {
			const products = await getDocs(collection(db, "products"));

			return products;
		} catch (error) {
			console.log("Firebase Error :: getAllProducts :: error: ", error);
		}
	}

	async getImage(path) {
		try {
			const imageRef = ref(storage, path);
			const url = await getDownloadURL(imageRef);
			return url;
		} catch (error) {
			console.log("Firebase Error :: getImage :: error: ", error);
		}
	}

	async getSingleProduct(id) {
		try {
			const q = query(collection(db, "products"), where("id", "==", id));
			const querySnapshot = await getDocs(q);
			const product = querySnapshot.docs[0].data();
			if (product) {
				return product;
			}
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async createOrder(userId, paymentId, items, amount) {
		try {
			await setDoc(doc(db, "users", userId, "orders", paymentId), {
				items,
				amount,
				paymentId,
				createdAt: new Date(),
			});
		} catch (error) {
			console.error("Firebase Error :: createOrder :: error:", error);
			throw new Error("Failed to create order: " + error.message);
		}
	}

	async getOrderData(userId) {
		try {
			const ordersCollection = collection(db, "users", userId, "orders");
			const snapshot = await getDocs(ordersCollection);

			if (snapshot.empty) {
				console.log("No orders found.");
				return [];
			}

			const orders = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			return orders;
		} catch (error) {
			console.error("Firebase Error :: getOrderData :: error:", error);
			return [];
		}
	}
}

const service = new Service();
export default service;
