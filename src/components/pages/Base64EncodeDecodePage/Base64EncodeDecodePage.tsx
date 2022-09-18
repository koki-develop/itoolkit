import { NextPage } from "next";
import React, { useCallback } from "react";
import Page from "@/components//util/Page";
import TextAreas from "@/components/util/TextAreas";
import { useI18n } from "@/hooks/i18nHooks";

const Base64EncodeDecodePage: NextPage = () => {
  const { t } = useI18n();

  const decode = useCallback(
    async (left: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const trimmedLeft = left.trim();
        const buf = Buffer.from(trimmedLeft, "base64");
        if (buf.toString("base64") !== trimmedLeft) {
          reject(new Error(t.errors.invalidBase64Data));
        } else {
          resolve(buf.toString("utf-8"));
        }
      });
    },
    [t.errors.invalidBase64Data],
  );

  const encode = useCallback(async (right: string): Promise<string> => {
    return Buffer.from(right, "utf-8").toString("base64");
  }, []);

  return (
    <Page
      title={t.tools.base64EncodeDecode.name}
      description={t.tools.base64EncodeDecode.description}
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

export default Base64EncodeDecodePage;
