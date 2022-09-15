import { js } from "js-beautify";
import { NextPage } from "next";
import React, { useCallback } from "react";
import Page from "@/components/util/Page";
import TextAreas from "@/components/util/TextAreas";

const JavaScriptFormatterPage: NextPage = () => {
  const formatJs = useCallback(async (plain: string): Promise<string> => {
    return js(plain);
  }, []);

  return (
    <Page title="JavaScript Formatter">
      <TextAreas
        left={{
          title: "JavaScript",
          toRightFunc: formatJs,
        }}
        right={{
          title: "Formatted",
          disabled: true,
        }}
      />
    </Page>
  );
};

export default JavaScriptFormatterPage;
