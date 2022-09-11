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

const TextArea: React.FC<TextAreaProps> = memo((props) => {
  const { title, value, error, onChange, textareaProps } = props;

  const handleChangeValue = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(event.currentTarget.value);
    },
    [onChange]
  );

  const handleCopy = useCallback(() => {
    copy(value);
  }, [value]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-end">
        <div className="flex items-center">
          <div className="text-lg">{title}</div>
          {error && (
            <div className="ml-2 italic text-red-500 text-sm">{error}</div>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="border rounded mb-1 p-2 hover:bg-gray-100 active:bg-gray-200 transition"
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
          "flex-grow outline-none resize-none border rounded p-2",
          {
            "border-red-500": !!error,
          }
        )}
      />
    </div>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
