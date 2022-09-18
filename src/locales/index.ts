export { ja } from "./ja";
export { en } from "./en";

type Tool = {
  name: string;
  description: string;
};

export type T = {
  app: {
    name: string;
    description: string;
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
    encoded: string;
    decoded: string;
    html: string;
    css: string;
    javascript: string;
    text: string;
  };
};
