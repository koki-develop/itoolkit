import classNames from "classnames";
import copy from "copy-to-clipboard";
import React, { memo, useCallback } from "react";
import { AiOutlineCopy } from "react-icons/ai";

export type TextAreaProps = {
  title: string;
  value: string;
  error: string | null;
  onChange: (value: string) => void;

  textareaProps?: React.HTMLProps<HTMLTextAreaElement>;
};

const TextArea: React.FC<TextAreaProps> = memo(props => {
  const { title, value, error, onChange, textareaProps } = props;

  const handleChangeValue = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(event.currentTarget.value);
    },
    [onChange],
  );

  const handleCopy = useCallback(() => {
    copy(value);
  }, [value]);

  return (
    <div className="flex flex-col">
      <div className="flex items-end justify-between">
        <div className="flex items-center">
          <div>{title}</div>
          {error && (
            <div className="ml-2 text-sm italic text-red-500">{error}</div>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="mb-1 rounded border p-2 transition hover:bg-gray-100 active:bg-gray-200"
        >
          <AiOutlineCopy />
        </button>
      </div>
      <textarea
        {...textareaProps}
        value={value}
        onChange={handleChangeValue}
        className={classNames(
          textareaProps?.className,
          "flex-grow resize-none rounded border p-2 outline-none",
          {
            "border-red-500": !!error,
          },
        )}
      />
    </div>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
