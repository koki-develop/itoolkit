import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import React, { useCallback, useEffect } from "react";
import Layout from "@/components/Layout";
import { useMounted } from "@/hooks/utilHooks";
import type { AppProps } from "next/app";
import "@/styles/global.scss";

nProgress.configure({
  showSpinner: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const mounted = useMounted();
  const router = useRouter();

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
