import { IconType } from "react-icons";
import { AiOutlineHtml5, AiOutlineLink } from "react-icons/ai";
import { BsHash } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { Base64, Icon } from "@/components/util/icons";

const groups = {
  encodeOrDecode: "Encode/Decode",
  formatter: "Formatter",
  generator: "Generator",
} as const;

export type Tool = {
  title: string;
  group: string;
  href: string;
  icon: IconType | Icon;
};

export type ToolGroup = {
  name: string;
  tools: Tool[];
};

export const tools: Tool[] = [
  // Encode/Decode
  {
    title: "URL Encode/Decode",
    group: groups.encodeOrDecode,
    href: "/tools/url-encode-decode",
    icon: AiOutlineLink,
  },
  {
    title: "Base64 Encode/Decode",
    group: groups.encodeOrDecode,
    href: "/tools/base64-encode-decode",
    icon: Base64,
  },
  // Formatter
  {
    title: "HTML Formatter",
    group: groups.formatter,
    href: "/tools/html-formatter",
    icon: AiOutlineHtml5,
  },
  {
    title: "CSS Formatter",
    group: groups.formatter,
    href: "/tools/css-formatter",
    icon: DiCss3,
  },
  {
    title: "JavaScript Formatter",
    group: groups.formatter,
    href: "/tools/js-formatter",
    icon: SiJavascript,
  },
  // Hash
  {
    title: "Hash",
    group: groups.generator,
    href: "/tools/hash",
    icon: BsHash,
  },
];

export const groupTools = (tools: Tool[]): ToolGroup[] => {
  const groups = tools.reduce<Record<string, Tool[]>>((result, current) => {
    if (!result[current.group]) {
      result[current.group] = [];
    }
    result[current.group].push(current);
    return result;
  }, {});

  return Object.entries(groups).map(([key, tools]) => ({ name: key, tools }));
};
