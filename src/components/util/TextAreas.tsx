import React, { memo, useCallback, useState } from "react";
import { Syntax } from "@/components/util/CodeEditor";
import TextArea from "@/components/util/TextArea";
import { AtomKey, useStore } from "@/hooks/storeHooks";

type BaseProps = {
  title: string;
  readOnly?: boolean;
};

export type TextAreasProps = {
  left: BaseProps & {
    atomKey: AtomKey;
    syntax?: Syntax;
    placeholder?: string;
    toRightFunc?: (left: string) => Promise<string> | string;
  };
  right: BaseProps & {
    atomKey: AtomKey;
    syntax?: Syntax;
    placeholder?: string;
    toLeftFunc?: (right: string) => Promise<string> | string;
  };
};

const TextAreas: React.FC<TextAreasProps> = memo(props => {
  const { left: leftProps, right: rightProps } = props;

  const { toRightFunc } = leftProps;
  const { toLeftFunc } = rightProps;

  const [left, setLeft] = useStore(leftProps.atomKey);
  const [leftError, setLeftError] = useState<string | null>(null);
  const [right, setRight] = useStore(rightProps.atomKey);
  const [rightError, setRightError] = useState<string | null>(null);

  const handleChangeLeft = useCallback(
    async (value: string) => {
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
    [setLeft, setRight, toRightFunc],
  );

  const handleChangeRight = useCallback(
    async (value: string) => {
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
    [setLeft, setRight, toLeftFunc],
  );

  return (
    <div className="grid grow grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
      <TextArea
        className="font-mono"
        title={leftProps.title}
        placeholder={leftProps.placeholder}
        syntax={leftProps.syntax}
        value={left}
        error={leftError}
        onChange={handleChangeLeft}
        textareaProps={{ readOnly: leftProps.readOnly }}
      />
      <TextArea
        className="font-mono"
        title={rightProps.title}
        placeholder={rightProps.placeholder}
        syntax={rightProps.syntax}
        value={right}
        error={rightError}
        onChange={handleChangeRight}
        textareaProps={{
          readOnly: rightProps.readOnly,
        }}
      />
    </div>
  );
});

TextAreas.displayName = "TextAreas";

export default TextAreas;
