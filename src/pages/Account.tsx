import { useQuery } from "@apollo/client";
import { Card, Button, Spin, Typography, Space, Avatar } from "antd";
import { USER_QUERY } from "../graphql/queries";

import "./Account.scss";
import { UserOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
const { Title, Text } = Typography;

export default function AccountPage() {
    const { data, loading, error } = useQuery(USER_QUERY, { fetchPolicy: "network-only" });
    const { t } = useTranslation();

    if (loading)
        return (
            <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
                <Spin />
            </div>
        );

    if (error)
        return (
            <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
                <Card>
                    <div style={{ color: "red" }}>{t("error")}: {error.message}</div>
                    <Button onClick={() => window.location.reload()}>{t("retry")}</Button>
                </Card>
            </div>
        );

    const firstName = data?.user?.firstName ?? "";
    const lastName = data?.user?.lastName ?? "";

    return (
        <Space className="account-page" direction="vertical" style={{ width: "100%" }}>
            <Avatar size={80} className="avatar">
                {firstName[0]}{lastName[0]}
            </Avatar>
            <Title level={2}>{t("account.welcome")}, {firstName}!</Title>
            <Text type="secondary">{t("account.secondaryTitle")}</Text>
            <Card className="account-card">
                <div className="title">
                    <Title level={5}><UserOutlined className="icon" /> {t("account.title")}</Title>
                    <Text type='secondary'>{t("account.subtitle")}</Text>
                </div>
                <label>{t("account.firstName")}</label>
                <div className="account-field">{firstName}</div>
                <label>{t("account.lastName")}</label>
                <div className="account-field">{lastName}</div>
            </Card>
        </Space>
    );
}
