import React from "react";
import { Layout, Button, Dropdown, Image } from "antd";
import { useI18n } from "../context/I18nProvider";
import { useTheme } from "../context/ThemeProvider";
import logo from "../assets/FreshcellsLogo.svg";
import darkModeLogo from "../assets/DarkModeLogo.svg";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { MoonOutlined, SunOutlined, TranslationOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Header } = Layout;

export const AppHeader: React.FC = () => {
    const { lang, setLang } = useI18n();
    const { darkMode, toggleDarkMode } = useTheme();
    const { t } = useTranslation();

    const { setToken, token } = useAuth();
    const navigate = useNavigate();

    const logout = () => {
        setToken(null);
        navigate("/login");
    };

    const langMenu = {
        items: [
            { key: "en", label: "English" },
            { key: "de", label: "Deutsch" },
        ],
        onClick: ({ key }: { key: string }) => setLang(key as "en" | "de"),
    };

    return (
        <Header className="app-header">
            <Image style={{ background: 'white' }} preview={false} src={darkMode ? darkModeLogo : logo} width={170} />
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <Dropdown menu={langMenu} placement="bottomRight">
                    <TranslationOutlined className="icon" />
                </Dropdown>
                {darkMode ? <MoonOutlined className="icon" onClick={toggleDarkMode} /> : <SunOutlined className="icon" onClick={toggleDarkMode} />}
                {token &&
                    <Button danger onClick={logout}>
                        {t("account.logout")}
                    </Button>}
            </div>
        </Header>
    );
};
