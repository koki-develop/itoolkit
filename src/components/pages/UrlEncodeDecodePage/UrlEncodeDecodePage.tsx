import { NextPage } from "next";
import React, { useCallback, useState } from "react";
import Layout from "../../Layout";
import Page from "../../util/Page";
import TextArea from "../../util/TextArea";

const UrlEncodeDecodePage: NextPage = () => {
  const [left, setLeft] = useState<string>("");
  const [leftError, setLeftError] = useState<string | null>(null);
  const [right, setRight] = useState<string>("");
  const [rightError, setRightError] = useState<string | null>(null);

  const leftToRight = useCallback(async (left: string): Promise<string> => {
    return decodeURIComponent(left);
  }, []);

  const rightToLeft = useCallback(async (right: string): Promise<string> => {
    return encodeURIComponent(right);
  }, []);

  const handleChangeLeft = useCallback(
    (value: string) => {
      setLeft(value);
      leftToRight(value)
        .then((right) => {
          setRight(right);
          setRightError(null);
          setLeftError(null);
        })
        .catch((error) => {
          setLeftError(error.message);
        });
    },
    [leftToRight]
  );

  const handleChangeRight = useCallback(
    (value: string) => {
      setRight(value);
      rightToLeft(value)
        .then((left) => {
          setLeft(left);
          setLeftError(null);
          setRightError(null);
        })
        .catch((error) => {
          setRightError(error.message);
        });
    },
    [rightToLeft]
  );

  return (
    <Page title="URL Encode/Decode">
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
    </Page>
  );
};

export default UrlEncodeDecodePage;
