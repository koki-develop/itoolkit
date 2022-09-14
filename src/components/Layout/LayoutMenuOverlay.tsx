import classNames from "classnames";
import React, { memo } from "react";

export type LayoutMenuOverlayProps = React.HTMLProps<HTMLDivElement> & {
  show: boolean;
};

const LayoutMenuOverlay: React.FC<LayoutMenuOverlayProps> = memo(props => {
  const { show, ...divProps } = props;

  return (
    <div
      {...divProps}
      className={classNames(
        divProps.className,
        "fixed top-0 left-0 z-50 h-full w-full bg-black duration-300 ease-in-out",
        {
          "opacity-30": show,
          "pointer-events-none opacity-0": !show,
        },
      )}
    />
  );
});

LayoutMenuOverlay.displayName = "LayoutMenuOverlay";

export default LayoutMenuOverlay;
