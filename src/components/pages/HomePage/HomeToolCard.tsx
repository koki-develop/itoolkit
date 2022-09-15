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
      <a className="flex flex-col items-center justify-center rounded border py-8 text-xs hover:bg-gray-100 active:bg-gray-200 dark:border-stone-700 dark:bg-stone-800 dark:hover:bg-stone-700 dark:active:bg-stone-600 md:text-sm lg:text-base">
        <div className="mb-2">
          {React.createElement(tool.icon, { className: "text-3xl" })}
        </div>
        <div>{tool.title}</div>
      </a>
    </Link>
  );
});

HomeToolCard.displayName = "HomeToolCard";

export default HomeToolCard;
