import React from "react";
import { Layout } from "antd";
import { useTranslation } from "react-i18next";

const { Footer } = Layout;

export const AppFooter: React.FC = () => {

    const { t } = useTranslation();

    return (
        <Footer className="app-footer">
            © {new Date().getFullYear()} {t("appName")}
        </Footer>
    );
};
