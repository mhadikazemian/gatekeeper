import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from "../i18n";

type Language = "en" | "de";

type I18nContextType = {
    lang: Language;
    setLang: (l: Language) => void;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "gatekeeper_language";

const getStoredLanguage = (): Language => {
    try {
        const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        return (stored === "en" || stored === "de") ? stored : "en";
    } catch {
        return "en";
    }
};

const saveLanguageToStorage = (language: Language) => {
    try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (error) {
        console.warn("Failed to save language to localStorage:", error);
    }
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLangState] = useState<Language>(getStoredLanguage);

    useEffect(() => {
        const storedLanguage = getStoredLanguage();
        setLangState(storedLanguage);
        i18n.changeLanguage(storedLanguage);
    }, []);

    const setLang = (l: Language) => {
        setLangState(l);
        i18n.changeLanguage(l);
        saveLanguageToStorage(l);
    };

    return <I18nContext.Provider value={{ lang, setLang }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within I18nProvider");
    return ctx;
};
