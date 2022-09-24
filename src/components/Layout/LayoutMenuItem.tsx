import classNames from "classnames";
import { useRouter } from "next/router";
import React, { memo, useMemo } from "react";
import Link from "@/components/util/Link";
import { Tool } from "@/types/tool";

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
      className={classNames("flex items-center p-4 pr-0 md:py-3 md:text-sm", {
        "bg-gray-200 dark:bg-stone-700": active,
        "hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-stone-700 dark:active:bg-stone-600":
          !active,
      })}
    >
      <span className="mr-1">{React.createElement(tool.icon)}</span>
      {tool.name}
    </div>
  );

  if (active) {
    return body;
  }

  return (
    <Link key={tool.href} href={tool.href}>
      {body}
    </Link>
  );
});

LayoutMenuItem.displayName = "LayoutMenuItem";

export default LayoutMenuItem;
