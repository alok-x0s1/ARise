import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:5001/ar-based-2ab00/us-central1/api", // the cloud function url
});

export default instance