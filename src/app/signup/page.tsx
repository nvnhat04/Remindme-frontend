"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import api from "@/lib/axios";
import toast from "react-hot-toast";

export default function SignUpPage() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
        const res = await api.post("/auth/signup", {
            username: form.username,
            email: form.email,
            passwordHash: form.password,
        });

        toast.success(res.data.message || "Signup successful");
        setTimeout(() => {
            router.push("/login");
            }, 1500);
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Signup failed");
        } finally {
            setLoading(false);
        }
        
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-md w-96"
        >
            <h1 className="text-xl font-bold mb-4">Sign Up</h1>

            <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full mb-3 p-2 border rounded"
            onChange={handleChange}
            />

            <input
            type="email"
            name="email"
            placeholder="Email"
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
            Sign Up
            </button>

            <p>Are you already have an account? <a href="/login" className="hover:text-blue-600">Login</a></p>
        </form>
        </div>
    );
}
