import React, { memo } from "react";
import LinkButton from "@/components/util/LinkButton";
import { Tool } from "@/types/tool";

export type HomeToolCardProps = {
  tool: Tool;
};

const HomeToolCard: React.FC<HomeToolCardProps> = memo(props => {
  const { tool } = props;

  return (
    <LinkButton
      href={tool.href}
      className="flex w-full flex-col rounded border py-8 text-xs dark:border-stone-700 dark:bg-stone-800 md:text-sm lg:text-base"
    >
      <div className="mb-2">
        {React.createElement(tool.icon, { className: "text-3xl" })}
      </div>
      <div className="px-2 text-center">{tool.name}</div>
    </LinkButton>
  );
});

HomeToolCard.displayName = "HomeToolCard";

export default HomeToolCard;
