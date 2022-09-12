import classNames from "classnames";
import React, { memo } from "react";
import { AiOutlineClose } from "react-icons/ai";

export type MenuProps = {
  children: React.ReactNode;

  open: boolean;
  onClose: () => void;
};

const Menu: React.FC<MenuProps> = memo(props => {
  const { children, open, onClose } = props;

  return (
    <>
      <div
        className={classNames(
          "fixed top-0 left-0 z-50 h-full w-full bg-black duration-300 ease-in-out sm:hidden",
          {
            "opacity-30": open,
            "pointer-events-none opacity-0": !open,
          },
        )}
        onClick={onClose}
      />
      <div
        className={classNames(
          "fixed top-0 left-0 z-50 h-full w-2/3 border-r bg-white duration-300 ease-in-out sm:w-[24vw] sm:min-w-[240px]",
          {
            "-translate-x-0": open,
            "-translate-x-full": !open,
          },
        )}
      >
        <div className="flex items-center border-b p-3">
          <button className="mr-1 p-1" onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
});

Menu.displayName = "Menu";

export default Menu;
