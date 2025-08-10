import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { AuthProvider } from "../src/context/AuthProvider";
import { ThemeProvider } from "../src/context/ThemeProvider";
import { I18nProvider } from "../src/context/I18nProvider";
import "../vitest.setup"; // ensures jest-dom matchers & matchMedia mock

type Options = {
    mocks?: any[];
};

export function renderWithProviders(ui: React.ReactNode, { mocks = [] }: Options = {}) {

    return render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <ThemeProvider>
                <I18nProvider>
                    <AuthProvider>{ui}</AuthProvider>
                </I18nProvider>
            </ThemeProvider>
        </MockedProvider>
    );
}
