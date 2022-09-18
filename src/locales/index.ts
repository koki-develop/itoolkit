import React from "react";

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
  };

  toolGroups: {
    encodeDecode: {
      name: string;
    };
    formatter: {
      name: string;
    };
    generator: {
      name: string;
    };
  };
  tools: {
    // Encode/Decode
    urlEncodeDecode: Tool;
    base64EncodeDecode: Tool;
    // Formatter
    htmlFormatter: Tool;
    cssFormatter: Tool;
    javascriptFormatter: Tool;
    // Generator
    hash: Tool;
    qrCode: Tool;
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

    text: string;
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
