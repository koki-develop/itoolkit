import classNames from "classnames";
import React, { memo, useCallback, useEffect, useRef } from "react";

export type PopperProps = React.HTMLProps<HTMLDivElement> & {
  open: boolean;
  onClose: () => void;
};

const Popper: React.FC<PopperProps> = memo(props => {
  const { open, onClose, ...divProps } = props;

  const rootRef = useRef<HTMLDivElement | null>(null);

  const handleClose = useCallback(
    (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, [handleClose]);

  return (
    <div
      {...divProps}
      ref={rootRef}
      className={classNames(
        divProps.className,
        "absolute top-8 right-0 z-50 rounded border bg-white text-black dark:border-stone-700 dark:bg-stone-800 dark:text-white",
        { hidden: !open },
      )}
    />
  );
});

Popper.displayName = "Popper";

export default Popper;
