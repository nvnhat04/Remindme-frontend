// app/components/HeaderServer.tsx
import { cookies } from "next/headers";
import HeaderClient from "./Header";

export default async function HeaderServer() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value ?? null;

    return <HeaderClient token={token} />;
}
