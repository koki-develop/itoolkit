import classNames from "classnames";
import { highlight, languages } from "prismjs";
import React, { memo, useCallback, useMemo } from "react";
import Editor from "react-simple-code-editor";
import CopyButton from "./CopyButton";

export type Syntax = "js";

type BaseProps = {
  title: string;
  value: string;
  error: string | null;
  onChange: (value: string) => void;
};

type WithHighlightProps = {
  syntax: Syntax;
  textareaProps?: { className?: string; disabled?: boolean };
};

type WithoutHighlightProps = {
  syntax?: undefined;
  textareaProps?: React.HTMLProps<HTMLTextAreaElement>;
};

export type TextAreaProps = BaseProps &
  (WithHighlightProps | WithoutHighlightProps);

const TextArea: React.FC<TextAreaProps> = memo(props => {
  const { title, value, syntax, error, onChange } = props;

  const handleChangeValue = useCallback(
    (value: string) => {
      onChange(value);
    },
    [onChange],
  );

  const grammar = useMemo(() => {
    if (!syntax) return null;
    switch (syntax) {
      case "js":
        return languages.js;
    }
  }, [syntax]);

  const highlightCode = useCallback(
    (code: string) => {
      if (!syntax) return "";
      if (!grammar) return "";
      return highlight(code, grammar, syntax);
    },
    [grammar, syntax],
  );

  const handleChangeTextareaValue = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      handleChangeValue(event.currentTarget.value);
    },
    [handleChangeValue],
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
      {syntax ? (
        <Editor
          {...props.textareaProps}
          value={value}
          onValueChange={handleChangeValue}
          highlight={highlightCode}
          padding={8}
          className={classNames(
            "grow rounded border opacity-100 dark:border-stone-700 dark:bg-stone-800",
            {
              "border-red-500 dark:border-red-500": !!error,
            },
          )}
          textareaClassName={classNames(
            props.textareaProps?.className,
            "outline-none",
          )}
        />
      ) : (
        <textarea
          {...props.textareaProps}
          value={value}
          onChange={handleChangeTextareaValue}
          className={classNames(
            props.textareaProps?.className,
            "grow resize-none rounded border p-2 opacity-100 outline-none disabled:text-black dark:border-stone-700 dark:bg-stone-800 dark:disabled:text-white",
            {
              "border-red-500 dark:border-red-500": !!error,
            },
          )}
        />
      )}
    </div>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
