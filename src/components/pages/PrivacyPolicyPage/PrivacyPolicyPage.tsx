import { NextPage } from "next";
import React from "react";
import Page from "@/components/util/Page";
import { useI18n } from "@/hooks/i18nHooks";
import PrivacyPolicyItem from "./PrivacyPolicyItem";

const PrivacyPolicyPage: NextPage = () => {
  const { t } = useI18n();

  return (
    <Page title={t.privacy.title}>
      <PrivacyPolicyItem title={t.privacy.useOfAnalysisTools.title}>
        {t.privacy.useOfAnalysisTools.content}
      </PrivacyPolicyItem>

      <PrivacyPolicyItem title={t.privacy.updatingPrivacyPolicy.title}>
        {t.privacy.updatingPrivacyPolicy.content}
      </PrivacyPolicyItem>
    </Page>
  );
};

export default PrivacyPolicyPage;
