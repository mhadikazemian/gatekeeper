import { renderHook, act } from "@testing-library/react";
import { I18nProvider, useI18n } from "../src/context/I18nProvider";
import i18n from "../src/i18n";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider>{children}</I18nProvider>
);

describe("I18nProvider", () => {
  test("defaults to English", () => {
    const { result } = renderHook(() => useI18n(), { wrapper });
    expect(result.current.lang).toBe("en");
    expect(i18n.language).toBe("en");
  });

  test("changes language", () => {
    const { result } = renderHook(() => useI18n(), { wrapper });
    act(() => {
      result.current.setLang("de");
    });
    expect(result.current.lang).toBe("de");
    expect(i18n.language).toBe("de");
  });
});
