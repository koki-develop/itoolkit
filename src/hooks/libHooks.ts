import crypto from "crypto";
import { format as sql } from "@sqltools/formatter";
import { css, html, js } from "js-beautify";
import qrcode from "qrcode";
import { useCallback } from "react";
import { useI18n } from "@/hooks/i18nHooks";

export const useUrl = () => {
  const { t } = useI18n();

  const urlDecode = useCallback(
    (left: string): string => {
      try {
        return decodeURIComponent(left);
      } catch {
        throw new Error(t.errors.invalidText);
      }
    },
    [t.errors.invalidText],
  );

  const urlEncode = useCallback(async (right: string): Promise<string> => {
    return encodeURIComponent(right);
  }, []);

  return {
    urlDecode,
    urlEncode,
  };
};

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

  const formatHtml = useCallback(
    (htmlText: string): string =>
      html(htmlText, {
        indent_inner_html: true,
      }),
    [],
  );

  const formatJs = useCallback((jsText: string): string => js(jsText), []);

  const formatSql = useCallback((sqlText: string): string => sql(sqlText), []);

  return {
    formatCss,
    formatHtml,
    formatJs,
    formatSql,
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

export const useQrcode = () => {
  const { t } = useI18n();

  const toDataUrl = useCallback(
    async (text: string): Promise<string> => {
      try {
        return await qrcode.toDataURL(text, { width: 350 });
      } catch {
        throw new Error(t.errors.tooLongText);
      }
    },
    [t.errors.tooLongText],
  );

  return {
    toDataUrl,
  };
};
