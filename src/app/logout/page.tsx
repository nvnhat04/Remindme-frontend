"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch  } from "react-redux";
import {logout} from "../../store/authSlice"
import type { RootState } from "../../store/store";
export default function LogoutPage() {
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        document.cookie = "token=; path=/; max-age=0"; // Remove cookie
        dispatch(logout());
        router.push("/login");
    }, [router]);

    return <p>Loading logout...</p>;
}
