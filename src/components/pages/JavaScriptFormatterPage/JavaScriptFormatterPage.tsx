import { NextPage } from "next";
import React from "react";
import FormatterPage from "@/components/util/FormatterPage";
import { useI18n } from "@/hooks/i18nHooks";
import { useFormat } from "@/hooks/libHooks";

const JavaScriptFormatterPage: NextPage = () => {
  const { t } = useI18n();

  const { formatJs } = useFormat();

  return (
    <FormatterPage
      title={t.tools.javascriptFormatter.name}
      description={t.tools.javascriptFormatter.description}
      left={{
        atomKey: "unformattedJavaScript",
        title: t.words.javascript,
        placeholder:
          '(()=>{const title="JavaScript Formatter";console.log(title);})();',
      }}
      right={{
        atomKey: "formattedJavaScript",
        title: t.words.formattedJavaScript,
        placeholder: `(() => {
    const title = "JavaScript Formatter";
    console.log(title);
})();`,
      }}
      syntax="js"
      format={formatJs}
    />
  );
};

export default JavaScriptFormatterPage;
