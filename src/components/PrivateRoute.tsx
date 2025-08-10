import React, { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) return <Navigate to="/login" replace />;
    return children;
};
