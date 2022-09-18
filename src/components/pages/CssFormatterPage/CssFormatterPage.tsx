import { css } from "js-beautify";
import { NextPage } from "next";
import React, { useCallback } from "react";
import FormatterPage from "@/components/util/FormatterPage";
import { useI18n } from "@/hooks/i18nHooks";

const CssFormatterPage: NextPage = () => {
  const { t } = useI18n();

  const formatCss = useCallback(async (plain: string): Promise<string> => {
    return css(plain);
  }, []);

  return (
    <FormatterPage
      title={t.tools.cssFormatter.name}
      left={{ title: t.words.css }}
      right={{ title: t.words.formattedCss }}
      format={formatCss}
    />
  );
};

export default CssFormatterPage;
