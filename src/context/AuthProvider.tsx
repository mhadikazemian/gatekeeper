import React, { createContext, useContext, useEffect, useState } from "react";

const AUTH_KEY = import.meta.env.VITE_AUTH_TOKEN_KEY ?? "auth_token";

type AuthContextType = {
    token: string | null;
    setToken: (t: string | null) => void;
    isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setTokenState] = useState<string | null>(() => localStorage.getItem(AUTH_KEY));

    useEffect(() => {
        if (token) localStorage.setItem(AUTH_KEY, token);
        else localStorage.removeItem(AUTH_KEY);
    }, [token]);

    const setToken = (t: string | null) => setTokenState(t);

    return (
        <AuthContext.Provider value={{ token, setToken, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
};
