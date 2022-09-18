import { T } from ".";

export const en: T = {
  app: {
    name: "iToolkit",
    description: "Awesome tools for development.",
  },

  errors: {
    invalidText: "Invalid text",
    invalidBase64Data: "Invalid Base64 data",
    tooLongText: "Text is too long",
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

  privacy: {
    title: "Privacy Policy",
    useOfAnalysisTools: {
      title: "Use of Access Analysis Tools",
      content: (
        <>
          This website uses Google Analytics, an access analysis tool provided
          by Google. Google Analytics uses cookies to collect traffic data. This
          traffic data is collected anonymously and is not personally
          identifiable. You can opt out of this feature by disabling cookies, so
          please check your browser settings. For more information about these
          terms, please see the{" "}
          <a
            className="text-blue-500"
            href="https://marketingplatform.google.com/about/analytics/terms/us/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Google Analytics Terms of Service
          </a>
          .
        </>
      ),
    },
    updatingPrivacyPolicy: {
      title: "Updating Privacy Policy",
      content: (
        <>
          In addition to complying with the Japanese laws and regulations
          applicable to personal information, this website will review and
          improve the contents of this policy from time to time. The revised and
          updated privacy policy will always be disclosed on this page.
        </>
      ),
    },
  },
} as const;
