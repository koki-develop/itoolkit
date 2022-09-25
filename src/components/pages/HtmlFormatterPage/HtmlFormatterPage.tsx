import { NextPage } from "next";
import React from "react";
import FormatterPage from "@/components/util/FormatterPage";
import { useI18n } from "@/hooks/i18nHooks";
import { useFormat } from "@/hooks/libHooks";

const HtmlFormatterPage: NextPage = () => {
  const { t } = useI18n();

  const { formatHtml } = useFormat();

  return (
    <FormatterPage
      title={t.tools.htmlFormatter.name}
      description={t.tools.htmlFormatter.description}
      left={{
        title: t.words.html,
        placeholder:
          "<html><head><title>HTML Formatter</title></head><body><h1>HTML Formatter</h1></body></html>",
      }}
      right={{
        title: t.words.formattedHtml,
        placeholder:
          "<html>\n\n    <head>\n        <title>HTML Formatter</title>\n    </head>\n\n    <body>\n        <h1>HTML Formatter</h1>\n    </body>\n\n</html>",
      }}
      syntax="html"
      format={formatHtml}
    />
  );
};

export default HtmlFormatterPage;
