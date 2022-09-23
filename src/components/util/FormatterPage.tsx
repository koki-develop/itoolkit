import React, { memo, useCallback } from "react";
import Page, { PageProps } from "@/components/util/Page";
import { Syntax } from "@/components/util/TextArea";
import TextAreas, { TextAreasProps } from "@/components/util/TextAreas";

export type FormatterPageProps = Omit<PageProps, "children"> & {
  format: (plain: string) => Promise<string> | string;
  syntax?: Syntax;
  left: Omit<TextAreasProps["left"], "disabled" | "toRightFunc">;
  right: Omit<TextAreasProps["left"], "disabled" | "toRightFunc">;
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
        syntax={syntax}
        left={{
          ...left,
          toRightFunc,
        }}
        right={{
          ...right,
          disabled: true,
        }}
      />
    </Page>
  );
});

FormatterPage.displayName = "FormatterPage";

export default FormatterPage;
