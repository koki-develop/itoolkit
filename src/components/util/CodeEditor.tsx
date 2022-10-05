import classNames from "classnames";
import { Grammar, highlight, languages } from "prismjs";
import React, { memo, useCallback, useMemo } from "react";
import Editor from "react-simple-code-editor";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-sql";

export type Syntax = "html" | "css" | "js" | "sql" | "xml";

export type CodeEditorProps = {
  className?: string;
  textAreaClassName?: string;
  placeholder?: string;
  value: string;
  error: string | null;
  syntax: Syntax;
  disabled?: boolean;
  onChange: (value: string) => void;
};

const CodeEditor: React.FC<CodeEditorProps> = memo(props => {
  const {
    className,
    textAreaClassName,
    placeholder,
    value,
    error,
    syntax,
    disabled,
    onChange,
  } = props;

  const grammar: Grammar = useMemo(() => {
    return {
      html: languages.html,
      css: languages.css,
      js: languages.js,
      sql: languages.sql,
      xml: languages.xml,
    }[syntax];
  }, [syntax]);

  const highlightCode = useCallback(
    (code: string) => {
      return highlight(code, grammar, syntax);
    },
    [grammar, syntax],
  );

  return (
    <div className={className}>
      <Editor
        data-placeholder={placeholder}
        disabled={disabled}
        value={value}
        onValueChange={onChange}
        highlight={highlightCode}
        padding={8}
        className={classNames(
          "min-h-full grow rounded border font-mono opacity-100 dark:border-stone-700 dark:bg-stone-800",
          {
            "border-red-500 dark:border-red-500": !!error,
            "with-placeholder": value === "",
          },
        )}
        textareaClassName={classNames(textAreaClassName, "outline-none")}
      />
    </div>
  );
});

CodeEditor.displayName = "CodeEditor";

export default CodeEditor;
