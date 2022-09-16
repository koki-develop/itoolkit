import { html } from "js-beautify";
import { NextPage } from "next";
import React, { useCallback } from "react";
import FormatterPage from "@/components/util/FormatterPage";

const HtmlFormatterPage: NextPage = () => {
  const formatHtml = useCallback(async (plain: string): Promise<string> => {
    return html(plain, {
      indent_inner_html: true,
    });
  }, []);

  return (
    <FormatterPage
      title="HTML Formatter"
      left={{ title: "HTML" }}
      format={formatHtml}
    />
  );
};

export default HtmlFormatterPage;
