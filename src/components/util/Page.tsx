import Head from "next/head";
import React, { memo, useMemo } from "react";
import { useI18n } from "@/hooks/i18nHooks";

export type PageProps = {
  children?: React.ReactNode;
  title?: string;
};

const Page: React.FC<PageProps> = memo(props => {
  const { children, title } = props;

  const { t } = useI18n();

  const pageTitle = useMemo(() => {
    if (!title) {
      return `${t.app.name} - ${t.app.description}`;
    }

    return `${title} | ${t.app.name}`;
  }, [t.app.description, t.app.name, title]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {title && <h2 className="mb-2 text-2xl">{title}</h2>}
      {children}
    </>
  );
});

Page.displayName = "Page";

export default Page;
