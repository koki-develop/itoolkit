import { NextPage } from "next";
import { useEffect, useState } from "react";
import Page from "@/components/util/Page";
import { useI18n } from "@/hooks/i18nHooks";
import { useIp } from "@/hooks/libHooks";

const IpPage: NextPage = () => {
  const [ip, setIp] = useState<string | null>(null);
  const [fetchedIp, setFetchedIp] = useState<boolean>(false);

  const { t } = useI18n();
  const { fetchIp } = useIp();

  useEffect(() => {
    fetchIp()
      .then(ip => {
        setIp(ip);
      })
      .catch(() => setIp(null))
      .finally(() => {
        setFetchedIp(true);
      });
  }, [fetchIp]);

  return (
    <Page title={t.tools.ip.name} description={t.tools.ip.description}>
      {!fetchedIp && <div>fetching...</div>}
      {fetchedIp && (ip ? <div>{ip}</div> : <div>failed</div>)}
    </Page>
  );
};

export default IpPage;
