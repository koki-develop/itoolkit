import classNames from "classnames";
import React, { memo } from "react";
import Link, { LinkProps } from "@/components/util/Link";

export type LinkButtonProps = LinkProps & {
  active?: boolean;
};

const LinkButton: React.FC<LinkButtonProps> = memo(props => {
  const { active, ...linkProps } = props;

  return (
    <Link
      {...linkProps}
      className={classNames(
        linkProps.className,
        "flex w-full items-center whitespace-nowrap hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-stone-700 dark:active:bg-stone-600",
        {
          "bg-gray-200 dark:bg-stone-700": active,
        },
      )}
    />
  );
});

LinkButton.displayName = "LinkButton";

export default LinkButton;
