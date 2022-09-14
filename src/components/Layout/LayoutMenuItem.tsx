import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo, useMemo } from "react";
import { Tool } from "@/tools";

export type LayoutMenuItemProps = {
  tool: Tool;
};

const LayoutMenuItem: React.FC<LayoutMenuItemProps> = memo(props => {
  const { tool } = props;

  const router = useRouter();

  const active = useMemo(() => {
    return router.pathname === tool.href;
  }, [router.pathname, tool.href]);

  const body = (
    <div
      className={classNames("flex items-center p-4 sm:py-3 sm:text-sm", {
        "bg-gray-200": active,
        "hover:bg-gray-100 active:bg-gray-200": !active,
      })}
    >
      <span className="mr-1">{React.createElement(tool.icon)}</span>
      {tool.title}
    </div>
  );

  if (active) {
    return body;
  }

  return (
    <Link key={tool.href} href={tool.href}>
      <a>{body}</a>
    </Link>
  );
});

LayoutMenuItem.displayName = "LayoutMenuItem";

export default LayoutMenuItem;
