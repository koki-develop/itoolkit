import { NextPage } from "next";
import Page from "@/components/util/Page";
import { useI18n } from "@/hooks/i18nHooks";

const IpPage: NextPage = () => {
  const { t } = useI18n();

  return (
    <Page title={t.tools.ip.name} description={t.tools.ip.description}>
      ip
    </Page>
  );
};

export default IpPage;
