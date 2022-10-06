import YAML from "js-yaml";
import { NextPage } from "next";
import React, { useCallback } from "react";
import Page from "@/components/util/Page";
import TextAreas from "@/components/util/TextAreas";
import { useI18n } from "@/hooks/i18nHooks";

const JsonYamlConverterPage: NextPage = () => {
  const { t } = useI18n();

  const jsonToYaml = useCallback((json: string): string => {
    const parsed = JSON.parse(json);
    return YAML.dump(parsed);
  }, []);

  const yamlToJson = useCallback((yaml: string): string => {
    const parsed = YAML.load(yaml);
    return JSON.stringify(parsed, null, 4);
  }, []);

  return (
    <Page
      title={t.tools.jsonYamlConverter.name}
      description={t.tools.jsonYamlConverter.description}
    >
      <TextAreas
        left={{
          title: "JSON",
          toRightFunc: jsonToYaml,
        }}
        right={{
          title: "YAML",
          toLeftFunc: yamlToJson,
        }}
      />
    </Page>
  );
};

export default JsonYamlConverterPage;
