import { NextPage } from "next";
import React, { useCallback } from "react";
import Page from "@/components//util/Page";
import TextAreas from "@/components/util/TextAreas";

const UrlEncodeDecodePage: NextPage = () => {
  const decode = useCallback(async (left: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        resolve(decodeURIComponent(left));
      } catch {
        reject(new Error("Invalid text"));
      }
    });
  }, []);

  const encode = useCallback(async (right: string): Promise<string> => {
    return encodeURIComponent(right);
  }, []);

  return (
    <Page title="URL Encode/Decode">
      <TextAreas
        left={{
          title: "Encoded",
          toRightFunc: decode,
        }}
        right={{
          title: "Decoded",
          toLeftFunc: encode,
        }}
      />
    </Page>
  );
};

export default UrlEncodeDecodePage;
