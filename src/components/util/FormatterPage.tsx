import React, { memo } from "react";
import Page, { PageProps } from "@/components/util/Page";
import TextAreas, { TextAreasProps } from "@/components/util/TextAreas";

export type FormatterPageProps = Omit<PageProps, "children"> & {
  format: (plain: string) => Promise<string> | string;
  left: Omit<TextAreasProps["left"], "disabled" | "toRightFunc">;
  right: Omit<TextAreasProps["left"], "disabled" | "toRightFunc">;
};

const FormatterPage: React.FC<FormatterPageProps> = memo(props => {
  const { format, left, right, ...pageProps } = props;

  return (
    <Page {...pageProps}>
      <TextAreas
        left={{
          ...left,
          toRightFunc: format,
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
