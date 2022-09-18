import { useTheme as useNextTheme } from "next-themes";
import { useCallback } from "react";

export type ResolvedTheme = "light" | "dark";
export type Theme = ResolvedTheme | "system";

export const useTheme = () => {
  const { resolvedTheme, setTheme: setNextTheme } = useNextTheme();

  const setTheme = useCallback(
    (theme: Theme) => {
      setNextTheme(theme);
    },
    [setNextTheme],
  );

  return {
    resolvedTheme: resolvedTheme as ResolvedTheme,
    setTheme,
  };
};
