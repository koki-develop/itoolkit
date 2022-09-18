import { js } from "js-beautify";
import { NextPage } from "next";
import React, { useCallback } from "react";
import FormatterPage from "@/components/util/FormatterPage";
import { useI18n } from "@/hooks/i18nHooks";

const JavaScriptFormatterPage: NextPage = () => {
  const { t } = useI18n();

  const formatJs = useCallback(async (plain: string): Promise<string> => {
    return js(plain);
  }, []);

  return (
    <FormatterPage
      title={t.tools.javascriptFormatter.name}
      description={t.tools.javascriptFormatter.description}
      left={{ title: t.words.javascript }}
      right={{ title: t.words.formattedJavaScript }}
      format={formatJs}
    />
  );
};

export default JavaScriptFormatterPage;
