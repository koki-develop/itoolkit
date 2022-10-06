import classNames from "classnames";
import React, { memo, useCallback } from "react";
import CodeEditor, { Syntax } from "@/components/util/CodeEditor";
import CopyButton from "@/components/util/CopyButton";

type BaseProps = {
  className?: string;
  title: string;
  placeholder?: string;
  value: string;
  error?: string | null;
  onChange?: (value: string) => void;
};

type WithHighlightProps = {
  syntax: Syntax;
  textareaProps?: { className?: string; readOnly?: boolean };
};

type WithoutHighlightProps = {
  syntax?: undefined;
  textareaProps?: React.HTMLProps<HTMLTextAreaElement>;
};

export type TextAreaProps = BaseProps &
  (WithHighlightProps | WithoutHighlightProps);

// TODO: リファクタ
const TextArea: React.FC<TextAreaProps> = memo(props => {
  const {
    className,
    title,
    placeholder,
    value,
    syntax,
    error,
    onChange,
    textareaProps,
  } = props;

  const handleChangeValue = useCallback(
    (value: string) => {
      onChange?.(value);
    },
    [onChange],
  );

  const handleChangeTextareaValue = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      handleChangeValue(event.currentTarget.value);
    },
    [handleChangeValue],
  );

  return (
    <div className={classNames(className, "textarea flex flex-col")}>
      <div className="flex items-end justify-between">
        <div className="flex items-center">
          <div className="font-sans">{title}</div>
          {error && (
            <div className="ml-2 text-sm italic text-red-500">{error}</div>
          )}
        </div>
        <CopyButton copyText={value} className="mb-1" />
      </div>
      {syntax ? (
        <CodeEditor
          {...textareaProps}
          className="h-[0px] grow overflow-y-auto"
          textAreaClassName={textareaProps?.className}
          placeholder={placeholder}
          value={value}
          error={error}
          syntax={syntax}
          onChange={onChange}
        />
      ) : (
        <div
          className={classNames("flex grow", {
            "with-placeholder before:p-[9px] before:content-[attr(data-placeholder)]":
              value === "",
          })}
          data-placeholder={placeholder}
        >
          <textarea
            {...props.textareaProps}
            value={value}
            onChange={handleChangeTextareaValue}
            className={classNames(
              props.textareaProps?.className,
              "grow resize-none rounded border p-2 opacity-100 outline-none dark:border-stone-700 dark:bg-stone-800",
              {
                "border-red-500 dark:border-red-500": !!error,
              },
            )}
          />
        </div>
      )}
    </div>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
