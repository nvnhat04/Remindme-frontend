import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    // Nếu không có token -> redirect về login
    if (!token && req.nextUrl.pathname.startsWith("/profile")) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

// Áp dụng middleware cho những route cần auth
export const config = {
    matcher: ["/profile/:path*"],
};
