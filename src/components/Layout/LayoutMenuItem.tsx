import { useRouter } from "next/router";
import React, { memo } from "react";
import LinkButton from "@/components/util/LinkButton";
import { Tool } from "@/types/tool";

export type LayoutMenuItemProps = {
  tool: Tool;
};

const LayoutMenuItem: React.FC<LayoutMenuItemProps> = memo(props => {
  const { tool } = props;

  const router = useRouter();

  return (
    <LinkButton
      key={tool.href}
      className="w-full p-4 md:py-3 md:text-sm"
      href={tool.href}
      active={router.pathname === tool.href}
    >
      <span className="mr-1">{React.createElement(tool.icon)}</span>
      {tool.name}
    </LinkButton>
  );
});

LayoutMenuItem.displayName = "LayoutMenuItem";

export default LayoutMenuItem;
