import classNames from "classnames";
import React, { memo } from "react";
import CopyButton, { CopyButtonProps } from "./CopyButton";

export type InputProps = React.HTMLProps<HTMLDivElement> & {
  title: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  buttonProps?: CopyButtonProps;
};

const Input: React.FC<InputProps> = memo(props => {
  const { title, inputProps, buttonProps, ...divProps } = props;

  return (
    <div
      {...divProps}
      className={classNames(divProps.className, "flex", "flex-col")}
    >
      <div className="text-sm">{title}</div>
      <div className="flex items-stretch">
        <input
          {...inputProps}
          className={classNames(
            inputProps?.className,
            "grow rounded rounded-r-none border p-2 outline-none",
          )}
        />
        <CopyButton
          {...buttonProps}
          copyText={inputProps?.value?.toString() ?? ""}
          className={classNames(
            buttonProps?.className,
            "rounded-l-none border-l-0 px-3",
          )}
        />
      </div>
    </div>
  );
});

Input.displayName = "Input";

export default Input;
