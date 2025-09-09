"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import api from "@/lib/axios";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const token = useSelector((state: RootState) => state.auth.token);
    const [user, setUser] = useState<{ username: string; email: string } | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
        try {
            const res = await api.get("/user/profile", {
            headers: {
                Authorization: `Bearer ${token}`, // token fake
            },
            });
            setUser(res.data.user);
        } catch (err) {
            console.error("Lỗi khi load profile:", err);
        }
        };

        if (token) fetchProfile();
    }, [token]);

    if (!user) return <p>Đang tải profile...</p>;

    return (
        <div>
        <h1>Xin chào {user.username}</h1>
        <p>Email: {user.email}</p>
        <p>Token: {token}</p>
        </div>
    );
}
