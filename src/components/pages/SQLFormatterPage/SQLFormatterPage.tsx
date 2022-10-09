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
      left={{
        atomKey: "unformattedSql",
        title: t.words.sql,
        placeholder:
          "SELECT * FROM tools WHERE title = 'SQL Formatter' LIMIT 1;",
      }}
      right={{
        atomKey: "formattedSql",
        title: t.words.formattedSql,
        placeholder: `SELECT *
FROM tools
WHERE title = 'SQL Formatter'
LIMIT 1;`,
      }}
      syntax="sql"
      format={formatSql}
    />
  );
};

export default SQLFormatterPage;
