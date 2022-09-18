import { NextPage } from "next";
import React, { useCallback } from "react";
import Page from "@/components//util/Page";
import TextAreas from "@/components/util/TextAreas";
import { useI18n } from "@/hooks/i18nHooks";

const UrlEncodeDecodePage: NextPage = () => {
  const { t } = useI18n();

  const decode = useCallback(
    async (left: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        try {
          resolve(decodeURIComponent(left));
        } catch {
          reject(new Error(t.errors.invalidText));
        }
      });
    },
    [t.errors.invalidText],
  );

  const encode = useCallback(async (right: string): Promise<string> => {
    return encodeURIComponent(right);
  }, []);

  return (
    <Page
      title={t.tools.urlEncodeDecode.name}
      description={t.tools.urlEncodeDecode.description}
    >
      <TextAreas
        left={{
          title: t.words.encodedText,
          toRightFunc: decode,
        }}
        right={{
          title: t.words.decodedText,
          toLeftFunc: encode,
        }}
      />
    </Page>
  );
};

export default UrlEncodeDecodePage;
