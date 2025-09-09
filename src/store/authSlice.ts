import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    user: string | null;
}

const initialState: AuthState = {
    token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
    user: typeof window !== "undefined" ? localStorage.getItem("user") : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (
        state,
        action: PayloadAction<{ token: string; user: string }>
        ) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", action.payload.user);
        },
        logout: (state) => {
        state.token = null;
        state.user = null;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
