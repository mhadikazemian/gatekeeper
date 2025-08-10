import { renderHook, act } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../src/context/ThemeProvider";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("defaults to light mode if no value in localStorage", () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current.darkMode).toBe(false);
  });

  test("toggles dark mode and persists in localStorage", () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.toggleDarkMode();
    });
    expect(result.current.darkMode).toBe(true);
    expect(localStorage.getItem("gatekeeper_dark_mode")).toBe("true");
  });
});
