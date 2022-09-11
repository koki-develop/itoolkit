import classNames from "classnames";
import { NextPage } from "next";
import React, { useCallback, useState } from "react";
import Layout from "../../Layout";

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
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.currentTarget.value;
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
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.currentTarget.value;
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
    <Layout>
      <h2 className="text-2xl mb-2">URL Encode/Decode</h2>
      <div className="flex flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div>Encoded</div>
            {leftError && <div className="text-red-500">{leftError}</div>}
          </div>
          <textarea
            value={left}
            onChange={handleChangeLeft}
            className={classNames(
              "flex-grow outline-none resize-none border rounded p-2",
              {
                "border-red-500": !!leftError,
              }
            )}
          />
        </div>
        <div className="flex flex-col">
          <label>Decoded</label>
          {rightError && <div className="text-red-500">{rightError}</div>}
          <textarea
            value={right}
            onChange={handleChangeRight}
            className={classNames(
              "flex-grow outline-none resize-none border rounded p-2",
              {
                "border-red-500": !!rightError,
              }
            )}
          />
        </div>
      </div>
    </Layout>
  );
};

export default UrlEncodeDecodePage;
