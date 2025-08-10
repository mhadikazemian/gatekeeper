import { renderHook, act } from "@testing-library/react";
import { useAuth, AuthProvider } from "../src/context/AuthProvider";
import React from "react";

// Helper to wrap hook in AuthProvider
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe("useAuth hook", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("initially reads token from localStorage", () => {
    localStorage.setItem("auth_token", "stored-token");
    const { result } = renderHook(() => useAuth(), { wrapper });
    expect(result.current.token).toBe("stored-token");
  });

  test("sets and removes token", () => {
    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.setToken("new-token");
    });
    expect(localStorage.getItem("auth_token")).toBe("new-token");

    act(() => {
      result.current.setToken(null);
    });
    expect(localStorage.getItem("auth_token")).toBeNull();
  });
});
