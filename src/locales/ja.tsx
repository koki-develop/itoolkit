import { T } from ".";

export const ja: T = {
  app: {
    name: "iToolkit",
    subtitle: "開発のための素晴らしいツール",
    description: "iToolkit は開発に役立つ様々なツール群です。",
  },

  errors: {
    invalidText: "無効なテキストです",
    invalidBase64Data: "無効な Base64 データです",
    tooLongText: "テキストが長すぎます",
    failedToParseXml: "XML のパースに失敗しました",
  },

  toolGroups: {
    encodeDecode: { name: "エンコード/デコード" },
    formatter: { name: "整形" },
    generator: { name: "生成" },
  },
  tools: {
    // Encode/Decode
    urlEncodeDecode: {
      name: "URL エンコード/デコード",
      description: "テキストを URL エンコードもしくはデコードします。",
    },
    base64EncodeDecode: {
      name: "Base64 エンコード/デコード",
      description: "テキストを Base64 エンコードもしくはデコードします。",
    },
    // Formatter
    htmlFormatter: {
      name: "HTML 整形",
      description: "HTML を整形します。",
    },
    cssFormatter: {
      name: "CSS 整形",
      description: "CSS を整形します。",
    },
    javascriptFormatter: {
      name: "JavaScript 整形",
      description: "JavaScript を整形します。",
    },
    sqlFormatter: {
      name: "SQL 整形",
      description: "SQL を整形します。",
    },
    xmlFormatter: {
      name: "XML 整形",
      description: "XML を整形します。",
    },
    // Generator
    hash: {
      name: "ハッシュ",
      description: "テキストをハッシュ値に変換します。",
    },
    qrCode: {
      name: "QR コード",
      description: "テキストを QR コードに変換します。",
    },
  },

  words: {
    text: "テキスト",
    encodedText: "エンコードされたテキスト",
    decodedText: "デコードされたテキスト",
    html: "HTML",
    formattedHtml: "整形された HTML",
    css: "CSS",
    formattedCss: "整形された CSS",
    javascript: "JavaScript",
    formattedJavaScript: "整形された JavaScript",
    sql: "SQL",
    formattedSql: "整形された SQL",
    xml: "XML",
    formattedXml: "整形された XML",
  },

  privacy: {
    title: "プライバシーポリシー",
    useOfAnalysisTools: {
      title: "アクセス解析ツールについて",
      content: (
        <>
          当サイトでは、 Google によるアクセス解析ツール「 Google
          アナリティクス」を利用しています。この Google
          アナリティクスはトラフィックデータの収集のために Cookie
          を使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能は
          Cookie
          を無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは
          <a
            className="text-blue-500"
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            Google アナリティクス利用規約{" "}
          </a>
          を参照してください。
        </>
      ),
    },
    updatingPrivacyPolicy: {
      title: "プライバシーポリシーの変更について",
      content: (
        <>
          当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
        </>
      ),
    },
  },
} as const;
