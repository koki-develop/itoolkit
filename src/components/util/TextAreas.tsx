import React, { memo, useCallback, useState } from "react";
import { Syntax } from "@/components/util/CodeEditor";
import TextArea from "@/components/util/TextArea";

type BaseProps = {
  title: string;
  disabled?: boolean;
};

export type TextAreasProps = {
  left: BaseProps & {
    syntax?: Syntax;
    placeholder?: string;
    toRightFunc?: (left: string) => Promise<string> | string;
  };
  right: BaseProps & {
    syntax?: Syntax;
    placeholder?: string;
    toLeftFunc?: (right: string) => Promise<string> | string;
  };
};

const TextAreas: React.FC<TextAreasProps> = memo(props => {
  const { left: leftProps, right: rightProps } = props;

  const { toRightFunc } = leftProps;
  const { toLeftFunc } = rightProps;

  const [left, setLeft] = useState<string>("");
  const [leftError, setLeftError] = useState<string | null>(null);
  const [right, setRight] = useState<string>("");
  const [rightError, setRightError] = useState<string | null>(null);

  const handleChangeLeft = useCallback(
    async (value: string) => {
      if (leftProps.disabled) return;

      setLeft(value);
      if (!toRightFunc) return;

      try {
        const result = await toRightFunc(value);
        setRight(result);
        setRightError(null);
        setLeftError(null);
      } catch (error: any) {
        setLeftError(error.message);
      }
    },
    [leftProps.disabled, toRightFunc],
  );

  const handleChangeRight = useCallback(
    async (value: string) => {
      if (rightProps.disabled) return;

      setRight(value);
      if (!toLeftFunc) return;

      try {
        const result = await toLeftFunc(value);
        setLeft(result);
        setLeftError(null);
        setRightError(null);
      } catch (error: any) {
        setRightError(error.message);
      }
    },
    [rightProps.disabled, toLeftFunc],
  );

  return (
    <div className="grid grow grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
      <TextArea
        title={leftProps.title}
        placeholder={leftProps.placeholder}
        syntax={leftProps.syntax}
        value={left}
        error={leftError}
        onChange={handleChangeLeft}
        textareaProps={{ className: "font-mono" }}
      />
      <TextArea
        title={rightProps.title}
        placeholder={rightProps.placeholder}
        syntax={rightProps.syntax}
        value={right}
        error={rightError}
        onChange={handleChangeRight}
        textareaProps={{
          className: "font-mono",
        }}
      />
    </div>
  );
});

TextAreas.displayName = "TextAreas";

export default TextAreas;
