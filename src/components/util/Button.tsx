import classNames from "classnames";
import React, { memo } from "react";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

const Button: React.FC<ButtonProps> = memo(props => {
  const { active, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={classNames(
        buttonProps.className,
        "flex w-full items-center whitespace-nowrap hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-stone-700 dark:active:bg-stone-600",
        {
          "bg-gray-200 dark:bg-stone-700": active,
        },
      )}
    />
  );
});

Button.displayName = "Button";

export default Button;
