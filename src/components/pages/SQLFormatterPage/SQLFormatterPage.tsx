import { NextPage } from "next";
import React from "react";
import FormatterPage from "@/components/util/FormatterPage";
import { useI18n } from "@/hooks/i18nHooks";
import { useFormat } from "@/hooks/libHooks";

const SQLFormatterPage: NextPage = () => {
  const { t } = useI18n();

  const { formatSql } = useFormat();

  return (
    <FormatterPage
      title={t.tools.sqlFormatter.name}
      description={t.tools.sqlFormatter.description}
      left={{ title: t.words.sql }}
      right={{ title: t.words.formattedSql }}
      format={formatSql}
    />
  );
};

export default SQLFormatterPage;
