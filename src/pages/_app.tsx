import path from "path";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import React, { useCallback, useEffect } from "react";
import Layout from "@/components/Layout";
import { useI18n } from "@/hooks/i18nHooks";
import { useMounted } from "@/hooks/utilHooks";
import type { AppProps } from "next/app";
import "@/styles/global.scss";

nProgress.configure({
  showSpinner: false,
});

const urlJoin = (base: string, ...paths: string[]): string => {
  const url = new URL(base);
  url.pathname = path.join(url.pathname, ...paths);
  return url.href;
};

function MyApp({ Component, pageProps }: AppProps) {
  const mounted = useMounted();
  const router = useRouter();

  const { t } = useI18n();

  const handleRouteStart = useCallback(() => {
    nProgress.start();
  }, []);

  const handleRouteDone = useCallback(() => {
    nProgress.done();
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: router.pathname,
      debug_mode: process.env.NEXT_PUBLIC_VERCEL_ENV !== "production",
    });
  }, [mounted, router.pathname]);

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);
    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, [handleRouteDone, handleRouteStart, router.events]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <meta property="og:site_name" content={t.app.name} />
        <meta
          property="og:url"
          content={urlJoin(`https://itoolkit.dev`, router.asPath)}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
