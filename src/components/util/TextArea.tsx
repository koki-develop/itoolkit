import classNames from "classnames";
import React, { memo, useCallback } from "react";
import CopyButton from "./CopyButton";

export type TextAreaProps = {
  title: string;
  value: string;
  error: string | null;
  onChange: (value: string) => void;

  textareaProps?: React.HTMLProps<HTMLTextAreaElement>;
};

const TextArea: React.FC<TextAreaProps> = memo(props => {
  const { title, value, error, onChange, textareaProps } = props;
  const { disabled } = textareaProps ?? {};

  const handleChangeValue = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (disabled) {
        event.preventDefault();
        return;
      }
      onChange(event.currentTarget.value);
    },
    [disabled, onChange],
  );

  return (
    <div className="flex flex-col">
      <div className="flex items-end justify-between">
        <div className="flex items-center">
          <div>{title}</div>
          {error && (
            <div className="ml-2 text-sm italic text-red-500">{error}</div>
          )}
        </div>
        <CopyButton copyText={value} className="mb-1" />
      </div>
      <textarea
        {...textareaProps}
        disabled={false}
        value={value}
        onChange={handleChangeValue}
        className={classNames(
          textareaProps?.className,
          "grow resize-none rounded border p-2 outline-none",
          {
            "bg-gray-50": textareaProps?.disabled,
            "border-red-500": !!error,
          },
        )}
      />
    </div>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
