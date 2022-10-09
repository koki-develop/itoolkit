import { NextPage } from "next";
import React from "react";
import FormatterPage from "@/components/util/FormatterPage";
import { useI18n } from "@/hooks/i18nHooks";
import { useFormat } from "@/hooks/libHooks";

const JsonFormatterPage: NextPage = () => {
  const { t } = useI18n();

  const { formatJson } = useFormat();

  return (
    <FormatterPage
      title={t.tools.jsonFormatter.name}
      description={t.tools.jsonFormatter.description}
      left={{
        atomKey: "unformattedJson",
        title: t.words.json,
        placeholder: '{"tool":{"title":"JSON Formatter"}}',
      }}
      right={{
        atomKey: "formattedJson",
        title: t.words.formattedJson,
        placeholder: `{
    "tool": {
        "title": "JSON Formatter"
    }
}`,
      }}
      syntax="json"
      format={formatJson}
    />
  );
};

export default JsonFormatterPage;
