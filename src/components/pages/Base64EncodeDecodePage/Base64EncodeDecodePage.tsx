import { NextPage } from "next";
import React, { useCallback } from "react";
import Page from "@/components//util/Page";
import TextAreas from "@/components/util/TextAreas";
import { useI18n } from "@/hooks/i18nHooks";
import { useBase64 } from "@/hooks/libHooks";

const Base64EncodeDecodePage: NextPage = () => {
  const { t } = useI18n();

  const { base64Decode, base64Encode } = useBase64();

  const decode = useCallback(
    async (left: string): Promise<string> => base64Decode(left),
    [base64Decode],
  );

  const encode = useCallback(
    async (right: string): Promise<string> => base64Encode(right),
    [base64Encode],
  );

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
