import { NextPage } from "next";
import React from "react";
import FormatterPage from "@/components/util/FormatterPage";
import { useI18n } from "@/hooks/i18nHooks";
import { useFormat } from "@/hooks/libHooks";

const YamlFormatterPage: NextPage = () => {
  const { t } = useI18n();

  const { formatYaml } = useFormat();

  return (
    <FormatterPage
      title={t.tools.yamlFormatter.name}
      description={t.tools.yamlFormatter.description}
      left={{
        atomKey: "unformattedYaml",
        title: t.words.yaml,
        placeholder: "{tool: {title: YAML Formatter}}",
      }}
      right={{
        atomKey: "formattedYaml",
        title: t.words.formattedYaml,
        placeholder: `tool:
  title: YAML Formatter`,
      }}
      syntax="yaml"
      format={formatYaml}
    />
  );
};

export default YamlFormatterPage;
