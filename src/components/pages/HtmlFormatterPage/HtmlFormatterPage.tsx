import { NextPage } from "next";
import React, { useCallback } from "react";
import { html } from "js-beautify";
import Page from "../../util/Page";
import TextAreas from "../../util/TextAreas";

const HtmlFormatterPage: NextPage = () => {
  const formatHtml = useCallback(async (plain: string): Promise<string> => {
    return html(plain, {
      indent_inner_html: true,
    });
  }, []);

  return (
    <Page title="HTML Formatter">
      <TextAreas
        left={{
          title: "HTML",
          toRightFunc: formatHtml,
        }}
        right={{
          title: "Formatted",
          disabled: true,
        }}
      />
    </Page>
  );
};

export default HtmlFormatterPage;
