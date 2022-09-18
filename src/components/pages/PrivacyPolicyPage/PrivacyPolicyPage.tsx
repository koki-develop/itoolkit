import { NextPage } from "next";
import React from "react";
import Page from "@/components/util/Page";
import PrivacyPolicyItem from "./PrivacyPolicyItem";

const PrivacyPolicyPage: NextPage = () => {
  return (
    <Page title="Privacy Policy">
      <PrivacyPolicyItem title="Use of Access Analysis Tools">
        This website uses Google Analytics, an access analysis tool provided by
        Google. Google Analytics uses cookies to collect traffic data. This
        traffic data is collected anonymously and is not personally
        identifiable. You can opt out of this feature by disabling cookies, so
        please check your browser settings. For more information about these
        terms, please see the{" "}
        <a
          className="text-blue-500"
          href="https://marketingplatform.google.com/about/analytics/terms/us/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Google Analytics Terms of Service
        </a>
        .
      </PrivacyPolicyItem>

      <PrivacyPolicyItem title="Updating Privacy Policy">
        In addition to complying with the Japanese laws and regulations
        applicable to personal information, this website will review and improve
        the contents of this policy from time to time. The revised and updated
        privacy policy will always be disclosed on this page.
      </PrivacyPolicyItem>
    </Page>
  );
};

export default PrivacyPolicyPage;
