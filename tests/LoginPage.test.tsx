import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LOGIN_MUTATION } from "../src/graphql/mutations";
import { renderWithProviders } from "./test-utils";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "../src/pages/Login";

const mocks = [
    {
        request: {
            query: LOGIN_MUTATION,
            variables: { email: "test@example.com", password: "password" },
        },
        result: {
            data: { login: { jwt: "dummy-token" } },
        },
    },
];

test("renders login form and logs in", async () => {
    renderWithProviders(
        <MemoryRouter>
            <LoginPage />
        </MemoryRouter>,
        { mocks }
    );

    await userEvent.type(screen.getByLabelText(/email/i), "test@example.com");
    await userEvent.type(screen.getByLabelText(/password/i), "password");
    userEvent.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
        const AUTH_KEY = import.meta.env.VITE_AUTH_TOKEN_KEY ?? "auth_token";
        expect(localStorage.getItem(AUTH_KEY)).toBe("dummy-token");
    });
});
