import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_CLOUD_FUNCTION_URL, // Firebase deployed url

	// baseURL: "http://127.0.0.1:5001/ar-based-2ab00/us-central1/api", // the cloud function url by default (Local)
});

export default instance;