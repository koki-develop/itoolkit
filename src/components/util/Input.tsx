import classNames from "classnames";
import React, { memo } from "react";
import { AiOutlineCopy } from "react-icons/ai";

export type InputProps = React.HTMLProps<HTMLDivElement> & {
  title: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const Input: React.FC<InputProps> = memo((props) => {
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
            "border rounded flex-grow p-2 rounded-r-none outline-none"
          )}
        />
        <button
          {...buttonProps}
          className={classNames(
            buttonProps?.className,
            "border px-3 border-l-0 rounded rounded-l-none outline-none hover:bg-gray-100 active:bg-gray-200"
          )}
        >
          <AiOutlineCopy />
        </button>
      </div>
    </div>
  );
});

Input.displayName = "Input";

export default Input;
