import { NextPage } from "next";
import React from "react";
import FormatterPage from "@/components/util/FormatterPage";
import { useI18n } from "@/hooks/i18nHooks";
import { useFormat } from "@/hooks/libHooks";

const CssFormatterPage: NextPage = () => {
  const { t } = useI18n();

  const { formatCss } = useFormat();

  return (
    <FormatterPage
      title={t.tools.cssFormatter.name}
      description={t.tools.cssFormatter.description}
      left={{
        atomKey: "unformattedCss",
        title: t.words.css,
        placeholder: ".css-formatter{color:#ffffff;background-color:#55b5a6;}",
      }}
      right={{
        atomKey: "formattedCss",
        title: t.words.formattedCss,
        placeholder: `.css-formatter {
    color: #ffffff;
    background-color: #55b5a6;
}`,
      }}
      syntax="css"
      format={formatCss}
    />
  );
};

export default CssFormatterPage;
