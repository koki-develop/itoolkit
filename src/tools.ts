import { IconType } from "react-icons";
import { AiOutlineHtml5, AiOutlineLink } from "react-icons/ai";
import { BsHash, BsSnow } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";

const groups = {
  encodeOrDecode: "Encode/Decode",
  formatter: "Formatter",
  generator: "Generator",
} as const;

export type Tool = {
  title: string;
  group: string;
  href: string;
  icon: IconType;
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
  // Hash
  {
    title: "Hash",
    group: groups.generator,
    href: "/tools/hash",
    icon: BsHash,
  },
  {
    title: "UUID",
    group: groups.generator,
    href: "/tools/uuid",
    icon: BsSnow,
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
