import classNames from "classnames";
import copy from "copy-to-clipboard";
import React, { memo, useCallback, useEffect, useState } from "react";
import { AiOutlineCheck, AiOutlineCopy } from "react-icons/ai";
import Button, { ButtonProps } from "@/components/util/Button";

export type CopyButtonProps = Omit<ButtonProps, "children"> & {
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
    <Button
      {...buttonProps}
      className={classNames(
        buttonProps.className,
        "rounded border p-2 dark:border-stone-700 dark:bg-stone-800",
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
    </Button>
  );
});

CopyButton.displayName = "CopyButton";

export default CopyButton;
