import { NextPage } from "next";
import React from "react";
import Page from "@/components//util/Page";
import TextAreas from "@/components/util/TextAreas";
import { useI18n } from "@/hooks/i18nHooks";
import { useBase64 } from "@/hooks/libHooks";

const Base64EncodeDecodePage: NextPage = () => {
  const { t } = useI18n();

  const { base64Decode, base64Encode } = useBase64();

  return (
    <Page
      title={t.tools.base64EncodeDecode.name}
      description={t.tools.base64EncodeDecode.description}
    >
      <TextAreas
        left={{
          atomKey: "base64EncodedText",
          title: t.words.encodedText,
          toRightFunc: base64Decode,
          placeholder: "QmFzZTY0IEVuY29kZS9EZWNvZGU=",
        }}
        right={{
          atomKey: "base64DecodedText",
          title: t.words.decodedText,
          toLeftFunc: base64Encode,
          placeholder: "Base64 Encode/Decode",
        }}
      />
    </Page>
  );
};

export default Base64EncodeDecodePage;
