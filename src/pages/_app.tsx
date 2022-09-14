import { useRouter } from "next/router";
import nProgress from "nprogress";
import React, { useCallback, useEffect } from "react";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import "@/styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleRouteStart = useCallback(() => {
    nProgress.start();
  }, []);

  const handleRouteDone = useCallback(() => {
    nProgress.done();
  }, []);

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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
