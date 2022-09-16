import { NextPage } from "next";
import React, { useCallback } from "react";
import Page from "@/components//util/Page";
import TextAreas from "@/components/util/TextAreas";

const validateBase64 = (base64: string): boolean => {
  return Buffer.from(base64, "base64").toString("base64") === base64;
};

const Base64EncodeDecodePage: NextPage = () => {
  const decode = useCallback(async (left: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const trimmedLeft = left.trim();
      const buf = Buffer.from(trimmedLeft, "base64");
      if (buf.toString("base64") !== trimmedLeft) {
        reject(new Error("Invalid base64 data"));
      } else {
        resolve(buf.toString("utf-8"));
      }
    });
  }, []);

  const encode = useCallback(async (right: string): Promise<string> => {
    return Buffer.from(right, "utf-8").toString("base64");
  }, []);

  return (
    <Page title="Base64 Encode/Decode">
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

export default Base64EncodeDecodePage;
