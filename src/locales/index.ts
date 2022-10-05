import React from "react";

export { ja } from "./ja";
export { en } from "./en";

type Tool = {
  name: string;
  description: string;
};

export type T = {
  app: {
    name: string;
    subtitle: string;
    description: string;
  };

  errors: {
    invalidText: string;
    invalidBase64Data: string;
    tooLongText: string;
    failedToParseXml: string;
    failedToGetIp: string;
  };

  toolGroups: {
    encodeDecode: { name: string };
    formatter: { name: string };
    generator: { name: string };
    network: { name: string };
  };
  tools: {
    // Encode/Decode
    urlEncodeDecode: Tool;
    base64EncodeDecode: Tool;
    // Formatter
    htmlFormatter: Tool;
    cssFormatter: Tool;
    javascriptFormatter: Tool;
    sqlFormatter: Tool;
    xmlFormatter: Tool;
    // Generator
    hash: Tool;
    qrCode: Tool;
    // Network
    ip: Tool;
  };

  words: {
    encodedText: string;
    decodedText: string;

    html: string;
    formattedHtml: string;
    css: string;
    formattedCss: string;
    javascript: string;
    formattedJavaScript: string;
    sql: string;
    formattedSql: string;
    xml: string;
    formattedXml: string;

    yourIp: string;

    text: string;
    retry: string;
    browser: string;
    userAgent: string;
    os: string;
  };

  themes: {
    light: string;
    dark: string;
    system: string;
  };

  privacy: {
    title: string;
    useOfAnalysisTools: {
      title: string;
      content: React.ReactNode;
    };
    updatingPrivacyPolicy: {
      title: string;
      content: React.ReactNode;
    };
  };
};
