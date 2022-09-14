import { IconType } from "react-icons";
import { AiOutlineHtml5, AiOutlineLink } from "react-icons/ai";
import { BsHash } from "react-icons/bs";

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

export const tools: Tool[] = [
  {
    title: "URL Encode/Decode",
    group: groups.encodeOrDecode,
    href: "/tools/url-encode-decode",
    icon: AiOutlineLink,
  },
  {
    title: "HTML Formatter",
    group: groups.formatter,
    href: "/tools/html-formatter",
    icon: AiOutlineHtml5,
  },
  {
    title: "Hash",
    group: groups.generator,
    href: "/tools/hash",
    icon: BsHash,
  },
];
