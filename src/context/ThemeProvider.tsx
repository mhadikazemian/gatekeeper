import React, { createContext, useContext, useEffect, useState } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";

const THEME_KEY = "gatekeeper_dark_mode";

type ThemeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const stored = localStorage.getItem(THEME_KEY);
        return stored === "true";
    });

    useEffect(() => {
        localStorage.setItem(THEME_KEY, String(darkMode));

        document.body.classList.add("theme-transition");
        const timeout = setTimeout(() => {
            document.body.classList.remove("theme-transition");
        }, 300);

        return () => clearTimeout(timeout);
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <ConfigProvider
                theme={{
                    algorithm: darkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
                }}
            >
                {children}
            </ConfigProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
};
