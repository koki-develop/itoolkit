import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import Button from "@/components/util/Button";
import CopyButton from "@/components/util/CopyButton";
import Page from "@/components/util/Page";
import { useI18n } from "@/hooks/i18nHooks";
import { useIp } from "@/hooks/libHooks";

const IpPage: NextPage = () => {
  const [ip, setIp] = useState<string | null>(null);
  const [fetchedIp, setFetchedIp] = useState<boolean>(false);

  const { t } = useI18n();
  const { fetchIp } = useIp();

  const startFetchIp = useCallback(() => {
    setFetchedIp(false);
    setIp(null);

    fetchIp()
      .then(ip => setIp(ip))
      .catch(() => setIp(null))
      .finally(() => setFetchedIp(true));
  }, [fetchIp]);

  const handleRetry = useCallback(() => {
    startFetchIp();
  }, [startFetchIp]);

  useEffect(() => {
    startFetchIp();
  }, [startFetchIp]);

  return (
    <Page title={t.tools.ip.name} description={t.tools.ip.description}>
      <div>
        <div className="flex flex-col items-center">
          <div className="mb-2 text-sm">{t.words.yourIp}</div>
          {fetchedIp && (
            <>
              <div className="mb-2">
                {ip ? (
                  <div className="flex space-x-2">
                    <div className="font-mono text-3xl sm:text-4xl md:text-5xl">
                      {ip}
                    </div>
                    <CopyButton className="px-2 sm:px-3" copyText={ip} />
                  </div>
                ) : (
                  <div className="text-red-500">{t.errors.failedToGetIp}</div>
                )}
              </div>
              <Button
                className="rounded border py-1 px-2 dark:border-stone-700"
                icon={AiOutlineReload}
                onClick={handleRetry}
              >
                {t.words.retry}
              </Button>
            </>
          )}
          {!fetchedIp && (
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-t-transparent" />
          )}
        </div>
      </div>
    </Page>
  );
};

export default IpPage;
