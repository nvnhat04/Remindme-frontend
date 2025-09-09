"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export default function DashboardPage() {
  const token = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
      <h1>Xin chào {user}</h1>
      <p>Token hiện tại: {token}</p>
    </div>
  );
}
