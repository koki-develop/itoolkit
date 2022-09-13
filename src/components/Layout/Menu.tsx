import classNames from "classnames";
import Link from "next/link";
import React, { memo, useMemo } from "react";
import { AiOutlineClose, AiOutlineHtml5, AiOutlineLink } from "react-icons/ai";
import { BsHash } from "react-icons/bs";

export type MenuItem = {
  text: string;
  href: string;
  icon: React.ReactNode;
};

export type MenuProps = {
  open: boolean;
  onClose: () => void;
};

const Menu: React.FC<MenuProps> = memo(props => {
  const { open, onClose } = props;

  const items: MenuItem[] = useMemo(() => {
    return [
      {
        text: "URL Encode/Decode",
        href: "/tools/url-encode-decode",
        icon: <AiOutlineLink />,
      },
      {
        text: "HTML Formatter",
        href: "/tools/html-formatter",
        icon: <AiOutlineHtml5 />,
      },
      {
        text: "Hash",
        href: "/tools/hash",
        icon: <BsHash />,
      },
    ];
  }, []);

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
          "fixed top-0 left-0 z-50 h-full w-2/3 border-r bg-white duration-300 ease-in-out sm:w-[220px] sm:-translate-x-0",
          {
            "-translate-x-0": open,
            "-translate-x-full": !open,
          },
        )}
      >
        <div className="flex h-[60px] items-center border-b p-3 sm:justify-end">
          <button className="mr-1 p-1" onClick={onClose}>
            <AiOutlineClose className="sm:hidden" />
          </button>
        </div>
        <div>
          {items.map(item => (
            <Link key={item.href} href={item.href}>
              <a>
                <div className="flex items-center border-b p-4 transition hover:bg-gray-100 sm:py-3 sm:text-sm">
                  <span className="mr-1">{item.icon}</span>
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
