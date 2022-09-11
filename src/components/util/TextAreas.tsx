import React, { memo, useCallback, useState } from "react";
import TextArea from "./TextArea";

type BaseProps = {
  title: string;
  disabled?: boolean;
};

export type TextAreasProps = {
  left: BaseProps & {
    toRightFunc?: (left: string) => Promise<string>;
  };
  right: BaseProps & {
    toLeftFunc?: (right: string) => Promise<string>;
  };
};

const TextAreas: React.FC<TextAreasProps> = memo((props) => {
  const { left: leftProps, right: rightProps } = props;

  const { toRightFunc } = leftProps;
  const { toLeftFunc } = rightProps;

  const [left, setLeft] = useState<string>("");
  const [leftError, setLeftError] = useState<string | null>(null);
  const [right, setRight] = useState<string>("");
  const [rightError, setRightError] = useState<string | null>(null);

  const handleChangeLeft = useCallback(
    (value: string) => {
      setLeft(value);
      toRightFunc?.(value)
        .then((right) => {
          setRight(right);
          setRightError(null);
          setLeftError(null);
        })
        .catch((error) => {
          setLeftError(error.message);
        });
    },
    [toRightFunc]
  );

  const handleChangeRight = useCallback(
    (value: string) => {
      setRight(value);
      toLeftFunc?.(value)
        .then((right) => {
          setLeft(right);
          setLeftError(null);
          setRightError(null);
        })
        .catch((error) => {
          setRightError(error.message);
        });
    },
    [toLeftFunc]
  );

  return (
    <div className="flex flex-grow grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
      <TextArea
        title={leftProps.title}
        value={left}
        error={leftError}
        onChange={handleChangeLeft}
        textareaProps={{ disabled: leftProps.disabled }}
      />
      <TextArea
        title={rightProps.title}
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
