import React, { memo } from "react";
import Layout from "../Layout";

export type PageProps = {
  children: React.ReactNode;
  title: string;
};

const Page: React.FC<PageProps> = memo(props => {
  const { children, title } = props;

  return (
    <Layout title={title}>
      <h2 className="mb-2 text-2xl">{title}</h2>
      {children}
    </Layout>
  );
});

Page.displayName = "Page";

export default Page;
