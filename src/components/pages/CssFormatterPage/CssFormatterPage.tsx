import { css } from "js-beautify";
import { NextPage } from "next";
import React, { useCallback } from "react";
import FormatterPage from "@/components/util/FormatterPage";

const CssFormatterPage: NextPage = () => {
  const formatCss = useCallback(async (plain: string): Promise<string> => {
    return css(plain);
  }, []);

  return (
    <FormatterPage
      title="CSS Formatter"
      left={{ title: "CSS" }}
      format={formatCss}
    />
  );
};

export default CssFormatterPage;
