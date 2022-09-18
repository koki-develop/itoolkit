import { IconType } from "react-icons";
import { Icon } from "@/components/util/icons";

export type Tool = {
  name: string;
  group: string;
  href: string;
  icon: IconType | Icon;
};
