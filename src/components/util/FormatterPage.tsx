import React, { memo, useCallback } from "react";
import { Syntax } from "@/components/util/CodeEditor";
import Page, { PageProps } from "@/components/util/Page";
import TextAreas, { TextAreasProps } from "@/components/util/TextAreas";

export type FormatterPageProps = Omit<PageProps, "children"> & {
  format: (plain: string) => Promise<string> | string;
  syntax?: Syntax;
  left: Omit<TextAreasProps["left"], "readOnly" | "toRightFunc">;
  right: Omit<TextAreasProps["left"], "readOnly" | "toRightFunc">;
};

const FormatterPage: React.FC<FormatterPageProps> = memo(props => {
  const { format, syntax, left, right, ...pageProps } = props;

  const toRightFunc = useCallback(
    (left: string) => {
      if (left === "") return "";
      return format(left);
    },
    [format],
  );

  return (
    <Page {...pageProps}>
      <TextAreas
        left={{
          ...left,
          toRightFunc,
        }}
        right={{
          ...right,
          syntax,
          readOnly: true,
        }}
      />
    </Page>
  );
});

FormatterPage.displayName = "FormatterPage";

export default FormatterPage;
