import { useRouter } from "next/router";
import { useMemo } from "react";
import { en, ja, T } from "@/locales";

export const useI18n = () => {
  const { locale } = useRouter();

  const t: T = useMemo(() => {
    switch (locale) {
      case "ja":
        return ja;
      default:
        return en;
    }
  }, [locale]);

  return {
    locale,
    t,
  };
};
