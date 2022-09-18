import Head from "next/head";
import React, { memo, useMemo } from "react";
import { useI18n } from "@/hooks/i18nHooks";

export type PageProps = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

const Page: React.FC<PageProps> = memo(props => {
  const { children, title, description } = props;

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
        <meta property="og:title" content={pageTitle} />
        {description && (
          <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
          </>
        )}
      </Head>
      {title && <h2 className="mb-2 text-2xl">{title}</h2>}
      {children}
    </>
  );
});

Page.displayName = "Page";

export default Page;
