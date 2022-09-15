import classNames from "classnames";
import copy from "copy-to-clipboard";
import React, { memo, useCallback, useEffect, useState } from "react";
import { AiOutlineCheck, AiOutlineCopy } from "react-icons/ai";

export type CopyButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  copyText: string;
};

const CopyButton: React.FC<CopyButtonProps> = memo(props => {
  const { copyText, ...buttonProps } = props;

  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = useCallback(() => {
    copy(copyText);
    setCopied(true);
  }, [copyText]);

  useEffect(() => {
    if (!copied) return;

    const timeoutId = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [copied]);

  return (
    <button
      {...buttonProps}
      className={classNames(
        buttonProps.className,
        "rounded border p-2 outline-none hover:bg-gray-100 active:bg-gray-200 dark:border-stone-700",
      )}
      onClick={handleCopy}
    >
      <AiOutlineCopy
        className={classNames({
          hidden: copied,
        })}
      />
      <AiOutlineCheck
        className={classNames("text-green-600", {
          hidden: !copied,
        })}
      />
    </button>
  );
});

CopyButton.displayName = "CopyButton";

export default CopyButton;
