import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Page from "@/components/util/Page";

const NotFoundPage: NextPage = () => {
  return (
    <Page title="Not Found">
      <div>
        <Link href="/">
          <a className="text-blue-500">Back to Home</a>
        </Link>
      </div>
    </Page>
  );
};

export default NotFoundPage;
