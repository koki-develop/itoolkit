import { NextPage } from "next";
import React from "react";
import Page from "@/components/util/Page";
import { useI18n } from "@/hooks/i18nHooks";

const JsonYamlConverterPage: NextPage = () => {
  const { t } = useI18n();

  return (
    <Page
      title={t.tools.jsonYamlConverter.name}
      description={t.tools.jsonYamlConverter.description}
    >
      json yaml converter
    </Page>
  );
};

export default JsonYamlConverterPage;
