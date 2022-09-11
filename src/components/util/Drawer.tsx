import classNames from "classnames";
import React, { memo } from "react";
import { Dialog, Transition } from "@headlessui/react";

export type DrawerProps = {
  children: React.ReactNode;

  open: boolean;
  onClose: () => void;
};

const Drawer: React.FC<DrawerProps> = (props) => {
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
          "top-0 left-0 min-w-[240px] w-[100vw] sm:w-[24vw] p-6 bg-white fixed h-full z-50 ease-in-out duration-300",
          {
            "-translate-x-0": open,
            "-translate-x-full": !open,
          }
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
