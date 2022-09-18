import React, { memo } from "react";
import Page, { PageProps } from "@/components/util/Page";
import TextAreas, { TextAreasProps } from "@/components/util/TextAreas";

export type FormatterPageProps = Omit<PageProps, "children"> & {
  format: (plain: string) => Promise<string>;
  left: Omit<TextAreasProps["left"], "disabled" | "toRightFunc">;
};

const FormatterPage: React.FC<FormatterPageProps> = memo(props => {
  const { format, left, ...pageProps } = props;

  return (
    <Page {...pageProps}>
      <TextAreas
        left={{
          ...left,
          toRightFunc: format,
        }}
        right={{
          title: "Formatted",
          disabled: true,
        }}
      />
    </Page>
  );
});

FormatterPage.displayName = "FormatterPage";

export default FormatterPage;