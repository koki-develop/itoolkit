import { useRouter } from "next/router";
import { useMemo } from "react";
import { ja, en, T } from "@/locales";

export type Locale = "ja" | "en";

export const useI18n = () => {
  const { locale } = useRouter();

  const t: T = useMemo(() => {
    switch (locale) {
      case "ja":
        return ja;
      case "en":
        return en;
      default:
        return en;
    }
  }, [locale]);

  return {
    locale: locale as Locale,
    t,
  };
};
