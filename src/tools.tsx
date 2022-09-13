import { IconType } from "react-icons";
import { AiOutlineHtml5, AiOutlineLink } from "react-icons/ai";
import { BsHash } from "react-icons/bs";

export type Tool = {
  title: string;
  href: string;
  icon: IconType;
};

export const tools: Tool[] = [
  {
    title: "URL Encode/Decode",
    href: "/tools/url-encode-decode",
    icon: AiOutlineLink,
  },
  {
    title: "HTML Formatter",
    href: "/tools/html-formatter",
    icon: AiOutlineHtml5,
  },
  {
    title: "Hash",
    href: "/tools/hash",
    icon: BsHash,
  },
];
