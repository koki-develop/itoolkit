import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* Google tag (gtag.js) */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${
              process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
            }', { debug_mode: ${
              process.env.NEXT_PUBLIC_VERCEL_ENV !== "production"
            } });
            `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
