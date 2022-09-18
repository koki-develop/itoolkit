import { T } from ".";

export const ja: T = {
  app: {
    name: "iToolkit",
    description: "開発のための素晴らしいツール。",
  },

  toolGroups: {
    encodeDecode: { name: "エンコード/デコード" },
    formatter: { name: "整形" },
    generator: { name: "生成" },
  },
  tools: {
    // Encode/Decode
    urlEncodeDecode: {
      name: "URLエンコード/デコード",
      description: "テキストをURLエンコードもしくはデコードします。",
    },
    base64EncodeDecode: {
      name: "Base64エンコード/デコード",
      description: "テキストをBase64エンコードもしくはデコードします。",
    },
    // Formatter
    htmlFormatter: {
      name: "HTML整形",
      description: "HTMLを整形します。",
    },
    cssFormatter: {
      name: "CSS整形",
      description: "CSSを整形します。",
    },
    javascriptFormatter: {
      name: "JavaScript整形",
      description: "JavaScriptを整形します。",
    },
    // Generator
    hash: {
      name: "ハッシュ",
      description: "テキストをハッシュに変換します。",
    },
    qrCode: {
      name: "QRコード",
      description: "テキストをQRコードに変換します。",
    },
  },

  words: {
    encoded: "エンコード済",
    decoded: "デコード済",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    text: "テキスト",
  },
} as const;
