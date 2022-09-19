import { NextPage } from "next";
import React from "react";
import Page from "@/components/util/Page";
import { useI18n } from "@/hooks/i18nHooks";

const XmlFormatterPage: NextPage = () => {
  const { t } = useI18n();

  return (
    <Page
      title={t.tools.xmlFormatter.name}
      description={t.tools.xmlFormatter.description}
    >
      xml
    </Page>
  );
};

export default XmlFormatterPage;
