import React, { memo, useCallback, useState } from "react";
import TextArea from "./TextArea";

export type TextAreasProps = {
  leftToRightFunc: (left: string) => Promise<string>;
  rightToLeftFunc: (right: string) => Promise<string>;
};

const TextAreas: React.FC<TextAreasProps> = memo((props) => {
  const { leftToRightFunc, rightToLeftFunc } = props;

  const [left, setLeft] = useState<string>("");
  const [leftError, setLeftError] = useState<string | null>(null);
  const [right, setRight] = useState<string>("");
  const [rightError, setRightError] = useState<string | null>(null);

  const handleChangeLeft = useCallback(
    (value: string) => {
      setLeft(value);
      leftToRightFunc(value)
        .then((right) => {
          setRight(right);
          setRightError(null);
          setLeftError(null);
        })
        .catch((error) => {
          setLeftError(error.message);
        });
    },
    [leftToRightFunc]
  );

  const handleChangeRight = useCallback(
    (value: string) => {
      setRight(value);
      rightToLeftFunc(value)
        .then((right) => {
          setLeft(right);
          setLeftError(null);
          setRightError(null);
        })
        .catch((error) => {
          setRightError(error.message);
        });
    },
    [rightToLeftFunc]
  );

  return (
    <div className="flex flex-grow grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
      <TextArea
        title="Encoded"
        value={left}
        error={leftError}
        onChange={handleChangeLeft}
      />
      <TextArea
        title="Decoded"
        value={right}
        error={rightError}
        onChange={handleChangeRight}
      />
    </div>
  );
});

TextAreas.displayName = "TextAreas";

export default TextAreas;
