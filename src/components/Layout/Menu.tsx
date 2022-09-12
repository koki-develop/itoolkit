import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo } from "react";
import { AiOutlineLeft, AiOutlineClose } from "react-icons/ai";

export type MenuItem = {
  text: string;
  href: string;
};

export type MenuProps = {
  items: MenuItem[];
  open: boolean;
  onClose: () => void;
};

const Menu: React.FC<MenuProps> = memo(props => {
  const { items, open, onClose } = props;

  const router = useRouter();
  console.log(router.pathname);

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
          "fixed top-0 left-0 z-50 h-full w-2/3 border-r bg-white duration-300 ease-in-out sm:w-[220px]",
          {
            "-translate-x-0": open,
            "-translate-x-full": !open,
          },
        )}
      >
        <div className="flex items-center border-b p-3 sm:justify-end">
          <button className="mr-1 p-1" onClick={onClose}>
            <AiOutlineLeft className="hidden sm:block" />
            <AiOutlineClose className="block sm:hidden" />
          </button>
        </div>
        <div>
          {items.map(item => (
            <Link key={item.href} href={item.href}>
              <a>
                <div className="border-b p-4 transition hover:bg-gray-100 sm:py-3 sm:text-sm">
                  {item.text}
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
});

Menu.displayName = "Menu";

export default Menu;
