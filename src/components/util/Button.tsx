import classNames from "classnames";
import React, { memo } from "react";
import { IconType } from "react-icons";
import { Icon } from "@/components/util/icons";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  icon?: Icon | IconType;
  active?: boolean;
};

const Button: React.FC<ButtonProps> = memo(props => {
  const { icon, active, children, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={classNames(
        buttonProps.className,
        "flex items-center whitespace-nowrap hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-stone-700 dark:active:bg-stone-600",
        {
          "bg-gray-200 dark:bg-stone-700": active,
        },
      )}
    >
      <span className="mr-2">{icon && React.createElement(icon)}</span>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
