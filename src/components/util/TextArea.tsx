import classNames from "classnames";
import React, { memo, useCallback } from "react";
import { AiOutlineCopy } from "react-icons/ai";

export type TextAreaProps = {
  title: string;
  value: string;
  error: string | null;
  onChange: (value: string) => void;
};

const TextArea: React.FC<TextAreaProps> = memo((props) => {
  const { title, value, error, onChange } = props;

  const handleChangeValue = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(event.currentTarget.value);
    },
    [onChange]
  );

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-end">
        <div className="flex items-end">
          <div>{title}</div>
          {error && (
            <div className="ml-2 italic text-red-500 text-sm">{error}</div>
          )}
        </div>
        <button className="border rounded mb-1 p-2 hover:bg-gray-100 active:bg-gray-200 transition">
          <AiOutlineCopy />
        </button>
      </div>
      <textarea
        value={value}
        onChange={handleChangeValue}
        className={classNames(
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
