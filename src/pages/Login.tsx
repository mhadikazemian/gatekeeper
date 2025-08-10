import { Button, Form, Input, Card, Space, Typography } from "antd";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { LOGIN_MUTATION } from "../graphql/mutations";
import toast from "react-hot-toast";

import "./Login.scss";
import { useTranslation } from "react-i18next";

type LoginForm = { email: string; password: string };

const { Title, Text } = Typography;

export default function LoginPage() {
    const [form] = Form.useForm<LoginForm>();
    const navigate = useNavigate();
    const { setToken } = useAuth();
    const { t } = useTranslation();

    const [login, { loading }] = useMutation(LOGIN_MUTATION, {
        onCompleted(data) {
            const token = data?.login?.jwt;
            if (token) {
                setToken(token);
                toast.success("Logged in");
                navigate("/account");
            } else {
                toast.error("Login succeeded but token missing. Check backend response.");
            }
        },
        onError(error) {
            toast.error(error.message || "Login failed");
        },
    });

    const onFinish = (values: LoginForm) => {
        login({ variables: values });
    };

    return (
        <Space className="login-page">
            <Title level={2}>{t("login.title")}</Title>
            <Text type="secondary">{t("login.subtitle")}</Text>
            <Card className="login-card" style={{ width: 420 }}>
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label={t("login.email")}
                        name="email"
                        rules={[
                            { required: true, message: t("login.emailIsRequired") },
                            { type: "email", message: t("login.invalidEmail") },
                        ]}
                    >
                        <Input placeholder="you@example.com" />
                    </Form.Item>
                    <Form.Item label={t("login.password")} name="password" rules={[{ required: true, message: t("login.passwordIsRequired") }]}>
                        <Input.Password placeholder="••••••••" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block loading={loading}>
                            {t("login.submit")}
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Space >
    );
}
