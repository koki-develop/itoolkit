import React, { memo } from "react";
import Link from "@/components/util/Link";
import { Tool } from "@/types/tool";

export type HomeToolCardProps = {
  tool: Tool;
};

const HomeToolCard: React.FC<HomeToolCardProps> = memo(props => {
  const { tool } = props;

  return (
    <Link
      href={tool.href}
      className="flex flex-col items-center justify-center rounded border py-8 text-xs hover:bg-gray-100 active:bg-gray-200 dark:border-stone-700 dark:bg-stone-800 dark:hover:bg-stone-700 dark:active:bg-stone-600 md:text-sm lg:text-base"
    >
      <div className="mb-2">
        {React.createElement(tool.icon, { className: "text-3xl" })}
      </div>
      <div className="px-2 text-center">{tool.name}</div>
    </Link>
  );
});

HomeToolCard.displayName = "HomeToolCard";

export default HomeToolCard;
