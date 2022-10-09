import { NextPage } from "next";
import React from "react";
import Page from "@/components/util/Page";
import TextAreas from "@/components/util/TextAreas";
import { useI18n } from "@/hooks/i18nHooks";
import { useJsonYaml } from "@/hooks/libHooks";

const JsonYamlConverterPage: NextPage = () => {
  const { t } = useI18n();

  const { jsonToYaml, yamlToJson } = useJsonYaml();

  return (
    <Page
      title={t.tools.jsonYamlConverter.name}
      description={t.tools.jsonYamlConverter.description}
    >
      <TextAreas
        left={{
          title: "JSON",
          toRightFunc: jsonToYaml,
          placeholder: `{
    "tool": {
        "title": "JSON <> YAML Converter"
    }
}`,
          syntax: "json",
        }}
        right={{
          title: "YAML",
          placeholder: `tool:
  title: JSON <> YAML Converter`,
          toLeftFunc: yamlToJson,
          syntax: "yaml",
        }}
      />
    </Page>
  );
};

export default JsonYamlConverterPage;
