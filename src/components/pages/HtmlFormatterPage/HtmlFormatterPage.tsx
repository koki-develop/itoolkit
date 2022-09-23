import { NextPage } from "next";
import React from "react";
import FormatterPage from "@/components/util/FormatterPage";
import { useI18n } from "@/hooks/i18nHooks";
import { useFormat } from "@/hooks/libHooks";

const HtmlFormatterPage: NextPage = () => {
  const { t } = useI18n();

  const { formatHtml } = useFormat();

  return (
    <FormatterPage
      title={t.tools.htmlFormatter.name}
      description={t.tools.htmlFormatter.description}
      left={{ title: t.words.html }}
      right={{ title: t.words.formattedHtml }}
      syntax="html"
      format={formatHtml}
    />
  );
};

export default HtmlFormatterPage;
