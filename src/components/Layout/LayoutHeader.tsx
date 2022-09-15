import classNames from "classnames";
import Link from "next/link";
import React, { memo } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import LayoutThemeSwitch from "./LayoutThemeSwitch";

export type LayoutHeaderProps = {
  onOpenMenu: () => void;
};

const LayoutHeader: React.FC<LayoutHeaderProps> = memo(props => {
  const { onOpenMenu } = props;

  return (
    <header className="flex items-center justify-center bg-teal-500 p-4 py-4 dark:bg-stone-800">
      <div className="container flex items-center justify-between text-white">
        <div className="flex items-center text-xl">
          <button className={classNames("mr-4 sm:hidden")} onClick={onOpenMenu}>
            <AiOutlineMenu />
          </button>
          <h1>
            <Link href="/">
              <a>iToolkit</a>
            </Link>
          </h1>
        </div>
        <div>
          <LayoutThemeSwitch />
        </div>
      </div>
    </header>
  );
});

LayoutHeader.displayName = "LayoutHeader";

export default LayoutHeader;
