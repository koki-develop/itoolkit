import Link from "next/link";
import React, { memo } from "react";
import { Tool } from "@/tools";

export type HomeToolCardProps = {
  tool: Tool;
};

const HomeToolCard: React.FC<HomeToolCardProps> = memo(props => {
  const { tool } = props;

  return (
    <Link key={tool.href} href={tool.href}>
      <a className="flex flex-col items-center justify-center rounded border py-8 text-xs hover:bg-gray-100 active:bg-gray-200">
        <div>{React.createElement(tool.icon, { className: "text-3xl" })}</div>
        <div>{tool.title}</div>
      </a>
    </Link>
  );
});

HomeToolCard.displayName = "HomeToolCard";

export default HomeToolCard;
