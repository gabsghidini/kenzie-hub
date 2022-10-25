import axios, { AxiosInstance } from "axios";

const API: AxiosInstance = axios.create({
	baseURL: "https://kenziehub.herokuapp.com/",
	timeout: 5000,
});

export default API;
