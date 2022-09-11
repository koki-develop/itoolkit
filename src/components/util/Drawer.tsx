import classNames from "classnames";
import React, { memo } from "react";
import { AiOutlineClose } from "react-icons/ai";

export type DrawerProps = {
  children: React.ReactNode;

  open: boolean;
  onClose: () => void;
};

const Drawer: React.FC<DrawerProps> = memo((props) => {
  const { children, open, onClose } = props;

  return (
    <>
      <div
        className={classNames(
          "fixed bg-black top-0 left-0 h-full w-full z-50 ease-in-out duration-300",
          {
            "opacity-30": open,
            "opacity-0 pointer-events-none": !open,
          }
        )}
        onClick={onClose}
      />
      <div
        className={classNames(
          "top-0 left-0 sm:min-w-[240px] w-[100vw] sm:w-[24vw] bg-white fixed h-full z-50 ease-in-out duration-300",
          {
            "-translate-x-0": open,
            "-translate-x-full": !open,
          }
        )}
      >
        <div className="border-b p-3 flex items-center">
          <button className="p-1 mr-1" onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
});

Drawer.displayName = "Drawer";

export default Drawer;
