import { js } from "js-beautify";
import { NextPage } from "next";
import React, { useCallback } from "react";
import FormatterPage from "@/components/util/FormatterPage";

const JavaScriptFormatterPage: NextPage = () => {
  const formatJs = useCallback(async (plain: string): Promise<string> => {
    return js(plain);
  }, []);

  return (
    <FormatterPage
      title="JavaScript Formatter"
      left={{ title: "JavaScript" }}
      format={formatJs}
    />
  );
};

export default JavaScriptFormatterPage;
