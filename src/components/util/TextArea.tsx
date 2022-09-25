import classNames from "classnames";
import { Grammar, highlight, languages } from "prismjs";
import React, { memo, useCallback, useMemo } from "react";
import Editor from "react-simple-code-editor";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-sql";
import CopyButton from "./CopyButton";

export type Syntax = "html" | "css" | "js" | "sql" | "xml";

type BaseProps = {
  title: string;
  placeholder?: string;
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

// TODO: リファクタ
const TextArea: React.FC<TextAreaProps> = memo(props => {
  const { title, placeholder, value, syntax, error, onChange } = props;

  const handleChangeValue = useCallback(
    (value: string) => {
      onChange(value);
    },
    [onChange],
  );

  const grammar: Grammar | null = useMemo(() => {
    if (!syntax) return null;
    switch (syntax) {
      case "html":
        return languages.html;
      case "css":
        return languages.css;
      case "js":
        return languages.js;
      case "sql":
        return languages.sql;
      case "xml":
        return languages.xml;
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
    <div className="textarea flex flex-col">
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
        <div className="h-[0px] grow overflow-y-auto">
          <Editor
            {...props.textareaProps}
            data-placeholder={placeholder}
            value={value}
            onValueChange={handleChangeValue}
            highlight={highlightCode}
            padding={8}
            className={classNames(
              "min-h-full grow rounded border opacity-100 dark:border-stone-700 dark:bg-stone-800",
              {
                "border-red-500 dark:border-red-500": !!error,
                "with-placeholder": value === "",
              },
            )}
            textareaClassName={classNames(
              props.textareaProps?.className,
              "outline-none",
            )}
          />
        </div>
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
              "grow resize-none rounded border p-2 opacity-100 outline-none disabled:text-black dark:border-stone-700 dark:bg-stone-800 dark:disabled:text-white",
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
