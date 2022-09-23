import React, { memo, useCallback, useEffect, useState } from "react";
import TextArea, { Syntax } from "@/components/util/TextArea";

type BaseProps = {
  title: string;
  disabled?: boolean;
};

export type TextAreasProps = {
  left: BaseProps & {
    syntax?: Syntax;
    toRightFunc?: (left: string) => Promise<string> | string;
  };
  right: BaseProps & {
    syntax?: Syntax;
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

  const handleChangeLeft = useCallback(async (value: string) => {
    setLeft(value);
  }, []);

  const handleChangeRight = useCallback(async (value: string) => {
    setRight(value);
  }, []);

  useEffect(() => {
    if (!toRightFunc) return;
    const timeoutId = setTimeout(async () => {
      try {
        const result = await toRightFunc(left);
        setRight(result);
        setRightError(null);
        setLeftError(null);
      } catch (error: any) {
        setLeftError(error.message);
      }
    }, 250);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [left, toRightFunc]);

  useEffect(() => {
    if (!toLeftFunc) return;
    const timeoutId = setTimeout(async () => {
      try {
        const result = await toLeftFunc(right);
        setLeft(result);
        setLeftError(null);
        setRightError(null);
      } catch (error: any) {
        setRightError(error.message);
      }
    }, 250);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [right, toLeftFunc]);

  return (
    <div className="grid grow grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
      <TextArea
        title={leftProps.title}
        syntax={leftProps.syntax}
        value={left}
        error={leftError}
        onChange={handleChangeLeft}
        textareaProps={{ disabled: leftProps.disabled }}
      />
      <TextArea
        title={rightProps.title}
        syntax={rightProps.syntax}
        value={right}
        error={rightError}
        onChange={handleChangeRight}
        textareaProps={{ disabled: rightProps.disabled }}
      />
    </div>
  );
});

TextAreas.displayName = "TextAreas";

export default TextAreas;
