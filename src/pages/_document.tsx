import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#55b5a6" />
          <link rel="icon" href="https://itoolkit.dev/favicon.ico" />
          <link
            rel="apple-touch-icon"
            href="https://itoolkit.dev/logo192.png"
          />
          <link rel="manifest" href="https://itoolkit.dev/manifest.json" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" />
          <meta property="og:image" content="https://itoolkit.dev/og.png" />
          <meta
            property="og:image:secure_url"
            content="https://itoolkit.dev/og.png"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@koki_develop" />

          {/* Google tag (gtag.js) */}
          {process.env.NEXT_PUBLIC_VERCEL_ENV === "production" && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                `}
              </Script>
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
