import { html } from "js-beautify";
import { NextPage } from "next";
import React, { useCallback } from "react";
import FormatterPage from "@/components/util/FormatterPage";
import { useI18n } from "@/hooks/i18nHooks";

const HtmlFormatterPage: NextPage = () => {
  const { t } = useI18n();

  const formatHtml = useCallback(async (plain: string): Promise<string> => {
    return html(plain, {
      indent_inner_html: true,
    });
  }, []);

  return (
    <FormatterPage
      title={t.tools.htmlFormatter.name}
      left={{ title: t.words.html }}
      right={{ title: t.words.formattedHtml }}
      format={formatHtml}
    />
  );
};

export default HtmlFormatterPage;
