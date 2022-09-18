import { T } from ".";

export const en: T = {
  app: {
    name: "iToolkit",
    description: "Awesome tools for development.",
  },

  toolGroups: {
    encodeDecode: { name: "Encode/Decode" },
    formatter: { name: "Formatter" },
    generator: { name: "Generator" },
  },
  tools: {
    // Encode/Decode
    urlEncodeDecode: {
      name: "URL Encode/Decode",
      description: "URL encode or decode text.",
    },
    base64EncodeDecode: {
      name: "Base64 Encode/Decode",
      description: "Base64 encode or decode text.",
    },
    // Formatter
    htmlFormatter: {
      name: "HTML Formatter",
      description: "Format HTML.",
    },
    cssFormatter: {
      name: "CSS Formatter",
      description: "Format CSS.",
    },
    javascriptFormatter: {
      name: "JavaScript Formatter",
      description: "Format JavaScript.",
    },
    // Generator
    hash: {
      name: "Hash",
      description: "Convert text to hash.",
    },
    qrCode: {
      name: "QR Code",
      description: "Convert text to QR Code.",
    },
  },

  words: {
    encodedText: "Encoded",
    decodedText: "Decoded",
    html: "HTML",
    formattedHtml: "Formatted HTML",
    css: "CSS",
    formattedCss: "Formatted CSS",
    javascript: "JavaScript",
    formattedJavaScript: "Formatted JavaScript",
    text: "Text",
  },
} as const;
