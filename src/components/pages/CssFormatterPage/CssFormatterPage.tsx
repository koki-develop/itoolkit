import { css } from "js-beautify";
import { NextPage } from "next";
import React, { useCallback } from "react";
import Page from "@/components/util/Page";
import TextAreas from "@/components/util/TextAreas";

const CssFormatterPage: NextPage = () => {
  const formatCss = useCallback(async (plain: string): Promise<string> => {
    return css(plain);
  }, []);

  return (
    <Page title="CSS Formatter">
      <TextAreas
        left={{
          title: "CSS",
          toRightFunc: formatCss,
        }}
        right={{
          title: "Formatted",
          disabled: true,
        }}
      />
    </Page>
  );
};

export default CssFormatterPage;
