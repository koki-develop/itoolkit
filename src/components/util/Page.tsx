import Head from "next/head";
import React, { memo, useMemo } from "react";

export type PageProps = {
  children: React.ReactNode;
  title: string;
};

const Page: React.FC<PageProps> = memo(props => {
  const { children, title } = props;

  const pageTitle = useMemo(() => {
    const appName = "iToolkit";
    if (!title) {
      return `${appName} - Awesome tools for development`;
    }

    return `${title} | ${appName}`;
  }, [title]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h2 className="mb-2 text-2xl">{title}</h2>
      {children}
    </>
  );
});

Page.displayName = "Page";

export default Page;
