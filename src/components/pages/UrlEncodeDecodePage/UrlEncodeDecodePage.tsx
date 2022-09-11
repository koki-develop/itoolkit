import { NextPage } from "next";
import React, { useCallback } from "react";
import Page from "../../util/Page";
import TextAreas from "../../util/TextAreas";

const UrlEncodeDecodePage: NextPage = () => {
  const leftToRight = useCallback(async (left: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        resolve(decodeURIComponent(left));
      } catch {
        reject(new Error("Invalid text"));
      }
    });
  }, []);

  const rightToLeft = useCallback(async (right: string): Promise<string> => {
    return encodeURIComponent(right);
  }, []);

  return (
    <Page title="URL Encode/Decode">
      <TextAreas
        left={{
          title: "Encoded",
          toRightFunc: leftToRight,
        }}
        right={{
          title: "Decoded",
          toLeftFunc: rightToLeft,
        }}
      />
    </Page>
  );
};

export default UrlEncodeDecodePage;
