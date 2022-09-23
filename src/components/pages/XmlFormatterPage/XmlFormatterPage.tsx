import { NextPage } from "next";
import React from "react";
import FormatterPage from "@/components/util/FormatterPage";
import { useI18n } from "@/hooks/i18nHooks";
import { useFormat } from "@/hooks/libHooks";

const XmlFormatterPage: NextPage = () => {
  const { t } = useI18n();

  const { formatXml } = useFormat();

  return (
    <FormatterPage
      title={t.tools.xmlFormatter.name}
      description={t.tools.xmlFormatter.description}
      left={{ title: t.words.xml }}
      right={{ title: t.words.formattedXml }}
      syntax="xml"
      format={formatXml}
    />
  );
};

export default XmlFormatterPage;
