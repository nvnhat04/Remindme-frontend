// lib/axios.ts
import axios, { AxiosError } from "axios";
import { store } from "../store/store";
const api = axios.create({
    baseURL: "http://localhost:5110/api",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (axios.isAxiosError(error)) {
        console.error("API Error:", error.response?.data || error.message);
        } else {
        console.error("Unexpected Error:", error);
        }
        return Promise.reject(error);
    }
);
api.interceptors.request.use((config) => {
    const token = store.getState().auth.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
