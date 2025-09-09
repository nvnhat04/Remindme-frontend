"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "../store/authSlice";
import Link from "next/link";

interface Props {
  token: string | null;
}

export default function HeaderClient({ token }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        router.push("/login");
    };

    return (
        <header className="w-full sticky top-0 z-50 bg-gray-200 px-4 sm:px-8 py-3 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold text-purple-700">Remind Me</h1>

        <nav className="hidden md:flex gap-6 text-purple-700 font-semibold">
            <Link href="/" className="hover:bg-purple-100 rounded-full px-3 py-1">
            Home
            </Link>
            <Link href="/dashboard" className="hover:bg-purple-100 rounded px-3 py-1">
                Dashboard
            </Link>
            {!token ? (
            <Link href="/login" className="hover:bg-purple-100 rounded-full px-3 py-1">
                Login
            </Link>
            ) : (
            <>
                <Link href="/profile" className="hover:bg-purple-100 rounded-full px-3 py-1">
                Profile
                </Link>
                <button onClick={handleLogout} className="hover:bg-purple-100 rounded-full px-3 py-1">
                Logout
                </button>
            </>
            )}
        </nav>

        {/* Mobile */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded hover:bg-purple-100"
        >
            ☰
        </button>

        {isOpen && (
            <nav className="absolute top-14 right-4 bg-white shadow-lg rounded-lg flex flex-col gap-4 p-4 text-purple-700 font-semibold md:hidden">
            <Link href="/" className="hover:bg-purple-100 rounded px-3 py-1">
                Home
            </Link>
            <Link href="/dashboard" className="hover:bg-purple-100 rounded px-3 py-1">
                Dashboard
            </Link>
            {!token && (
                <Link href="/login" className="hover:bg-purple-100 rounded-full px-3 py-1">
                Login
                </Link>
            )}
            {token && (
                <>
                <Link href="/profile" className="hover:bg-purple-100 rounded-full px-3 py-1">
                    Profile
                </Link>
                <button onClick={handleLogout} className="hover:bg-purple-100 rounded-full px-3 py-1">Logout</button>
                </>
            )}
            </nav>
        )}
        </header>
    );
}
