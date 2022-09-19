import crypto from "crypto";
import { css, html } from "js-beautify";
import { useCallback } from "react";
import { useI18n } from "./i18nHooks";

export const useBase64 = () => {
  const { t } = useI18n();

  const base64Encode = useCallback((str: string): string => {
    return Buffer.from(str, "utf-8").toString("base64");
  }, []);

  const base64Decode = useCallback(
    (str: string): string => {
      const base64 = Buffer.from(str, "base64");
      if (base64.toString("base64") !== str) {
        throw new Error(t.errors.invalidBase64Data);
      }

      return base64.toString("utf-8");
    },
    [t.errors.invalidBase64Data],
  );

  return {
    base64Encode,
    base64Decode,
  };
};

export const useFormat = () => {
  const formatCss = useCallback((cssText: string) => css(cssText), []);

  const formatHtml = useCallback((htmlText: string): string => {
    return html(htmlText, {
      indent_inner_html: true,
    });
  }, []);

  return {
    formatCss,
    formatHtml,
  };
};

export type HashAlgorithm =
  | "md5"
  | "rmd160"
  | "sha1"
  | "sha256"
  | "sha384"
  | "sha512";

export const useHash = () => {
  const toHash = useCallback(
    (str: string, algorithm: HashAlgorithm): string =>
      crypto.createHash(algorithm).update(str).digest("hex"),
    [],
  );

  return toHash;
};
