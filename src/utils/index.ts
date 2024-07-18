import axios from "axios";

export const API_URL = "http://localhost:8080/";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);