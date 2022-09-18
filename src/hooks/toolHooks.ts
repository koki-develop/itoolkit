import Fuse from "fuse.js";
import { useMemo } from "react";
import { AiOutlineHtml5, AiOutlineLink, AiOutlineQrcode } from "react-icons/ai";
import { BsHash } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { Base64 } from "@/components/util/icons";
import { useI18n } from "@/hooks/i18nHooks";
import { Tool } from "@/types/tool";

export type ToolGroup = {
  name: string;
  tools: Tool[];
};

export const useTools = (searchText: string): Tool[] => {
  const { t } = useI18n();

  const tools = useMemo<Tool[]>(() => {
    return [
      // Encode/Decode
      {
        name: t.tools.urlEncodeDecode.name,
        group: t.toolGroups.encodeDecode.name,
        href: "/tools/url-encode-decode",
        icon: AiOutlineLink,
      },
      {
        name: t.tools.base64EncodeDecode.name,
        group: t.toolGroups.encodeDecode.name,
        href: "/tools/base64-encode-decode",
        icon: Base64,
      },
      // Formatter
      {
        name: t.tools.htmlFormatter.name,
        group: t.toolGroups.formatter.name,
        href: "/tools/html-formatter",
        icon: AiOutlineHtml5,
      },
      {
        name: t.tools.cssFormatter.name,
        group: t.toolGroups.formatter.name,
        href: "/tools/css-formatter",
        icon: DiCss3,
      },
      {
        name: t.tools.javascriptFormatter.name,
        group: t.toolGroups.formatter.name,
        href: "/tools/js-formatter",
        icon: SiJavascript,
      },
      // Generator
      {
        name: t.tools.hash.name,
        group: t.toolGroups.generator.name,
        href: "/tools/hash",
        icon: BsHash,
      },
      {
        name: t.tools.qrCode.name,
        group: t.toolGroups.generator.name,
        href: "/tools/qrcode",
        icon: AiOutlineQrcode,
      },
    ];
  }, [t]);

  const filteredTools = useMemo(() => {
    const trimmedSearchText = searchText.trim();
    if (trimmedSearchText === "") {
      return tools;
    }

    const fuse = new Fuse(tools, {
      keys: ["title"],
    });

    return fuse.search(trimmedSearchText).map(result => result.item);
  }, [searchText, tools]);

  return filteredTools;
};

export const useToolGroups = (tools: Tool[]): ToolGroup[] => {
  const groups = useMemo<{ name: string; tools: Tool[] }[]>(() => {
    const map = tools.reduce<Record<string, Tool[]>>((result, current) => {
      if (!result[current.group]) {
        result[current.group] = [];
      }
      result[current.group].push(current);
      return result;
    }, {});

    return Object.entries(map).map(([name, tools]) => ({ name, tools }));
  }, [tools]);

  return groups;
};