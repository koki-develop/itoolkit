import classNames from "classnames";
import { NextPage } from "next";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import TextareaAutosize from "react-textarea-autosize";
import { IResult, UAParser } from "ua-parser-js";
import Button from "@/components/util/Button";
import CopyButton from "@/components/util/CopyButton";
import Page from "@/components/util/Page";
import { useI18n } from "@/hooks/i18nHooks";
import { useIp } from "@/hooks/libHooks";

const IpPage: NextPage = () => {
  const [ip, setIp] = useState<string | null>(null);
  const [fetchedIp, setFetchedIp] = useState<boolean>(false);
  const [info, setInfo] = useState<IResult | null>(null);

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

  const items = useMemo(() => {
    if (!info) return [];

    return [
      {
        name: t.words.userAgent,
        value: info.ua,
      },
      {
        name: t.words.browser,
        value: `${info.browser.name}(${info.browser.version})`,
      },
      {
        name: t.words.os,
        value: `${info.os.name}(${info.os.version})`,
      },
    ];
  }, [info, t.words.browser, t.words.os, t.words.userAgent]);

  useEffect(() => {
    startFetchIp();
  }, [startFetchIp]);

  useEffect(() => {
    setInfo(new UAParser().getResult());
  }, []);

  return (
    <Page title={t.tools.ip.name} description={t.tools.ip.description}>
      <div className="mb-6 flex flex-col items-center">
        <div className="mb-2 text-sm">{t.words.yourIp}</div>
        {fetchedIp && (
          <>
            <div className="mb-2">
              {ip ? (
                <div className="flex items-center space-x-2">
                  <div className="font-mono text-3xl sm:text-4xl md:text-5xl">
                    {ip}
                  </div>
                  <CopyButton className="p-2 sm:p-3" copyText={ip} />
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

      <div className="space-y-4">
        {items.map(item => (
          <div key={item.name} className="textarea flex flex-col">
            <div className="flex items-end justify-between">
              <div className="flex items-center">
                <div>{item.name}</div>
              </div>
              <CopyButton copyText={item.value} className="mb-1" />
            </div>
            <div className={classNames("flex grow")}>
              <TextareaAutosize
                value={item.value}
                readOnly
                className={classNames(
                  "grow resize-none rounded border p-2 font-mono outline-none dark:border-stone-700 dark:bg-stone-800",
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default IpPage;
