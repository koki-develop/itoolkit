import { useRouter } from "next/router";
import { useMemo } from "react";
import { en, T } from "@/locales";

export const useI18n = () => {
  const { locale } = useRouter();

  const t: T = useMemo(() => {
    switch (locale) {
      default:
        return en;
    }
  }, [locale]);

  return {
    locale,
    t,
  };
};
