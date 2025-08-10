import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import { USER_QUERY } from "../src/graphql/queries";
import AccountPage from "../src/pages/Account";
import { expect, test } from "vitest";

const mocks = [
  {
    request: { query: USER_QUERY },
    result: {
      data: {
        user: { firstName: "John", lastName: "Doe" },
      },
    },
  },
];

test("renders account details", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter>
        <AccountPage />
      </MemoryRouter>
    </MockedProvider>
  );

  await waitFor(() => {
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
  });
});
