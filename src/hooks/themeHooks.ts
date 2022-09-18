import { useTheme as useNextTheme } from "next-themes";
import { useCallback } from "react";

export type ResolvedTheme = "light" | "dark";
export type Theme = ResolvedTheme | "system";

export const useTheme = () => {
  const { theme, resolvedTheme, setTheme: setNextTheme } = useNextTheme();

  const setTheme = useCallback(
    (theme: Theme) => {
      setNextTheme(theme);
    },
    [setNextTheme],
  );

  return {
    theme: theme as Theme,
    resolvedTheme: resolvedTheme as ResolvedTheme,
    setTheme,
  };
};
