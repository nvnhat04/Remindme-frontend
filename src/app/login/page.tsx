"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import api from "@/lib/axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setCookie } from "cookies-next";
import { setCredentials } from "../../store/authSlice";
import type { AppDispatch } from "../../store/store";
function LoginPage(){
    const [form, setForm] = useState({username: "", password: ""});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
        const res = await api.post("/auth/login", {
            username: form.username,
            passwordHash: form.password,
        });
        dispatch(
            setCredentials({
            token: res.data.token,
            user: form.username,
            })
        );
        // document.cookie = `token=${res.data.token}; path=/; max-age=3600; secure; samesite=strict`;
        setCookie("token", res.data.token, { maxAge: 60 * 60 * 2 });
        toast.success(res.data.message || "Login successful");
        setTimeout(() => {
            router.push("/dashboard");
            }, 1500);
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
        
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-96"
            >
                <h1 className="text-xl font-bold mb-4">Login</h1>

                <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full mb-3 p-2 border rounded"
                onChange={handleChange}
                />

                <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full mb-3 p-2 border rounded"
                onChange={handleChange}
                />

                <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                Login
                </button>
                <p>Don't you have an account? <a href="/login" className="hover:text-blue-600">Sign up</a></p>
            </form>
        </div>
    );
}
export default LoginPage;