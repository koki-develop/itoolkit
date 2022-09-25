import { NextPage } from "next";
import React from "react";
import Page from "@/components//util/Page";
import TextAreas from "@/components/util/TextAreas";
import { useI18n } from "@/hooks/i18nHooks";
import { useUrl } from "@/hooks/libHooks";

const UrlEncodeDecodePage: NextPage = () => {
  const { t } = useI18n();

  const { urlDecode, urlEncode } = useUrl();

  return (
    <Page
      title={t.tools.urlEncodeDecode.name}
      description={t.tools.urlEncodeDecode.description}
    >
      <TextAreas
        left={{
          title: t.words.encodedText,
          toRightFunc: urlDecode,
          placeholder: "URL%20Encode%2FDecode",
        }}
        right={{
          title: t.words.decodedText,
          toLeftFunc: urlEncode,
          placeholder: "URL Encode/Decode",
        }}
      />
    </Page>
  );
};

export default UrlEncodeDecodePage;
