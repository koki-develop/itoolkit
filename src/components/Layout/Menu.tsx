import classNames from "classnames";
import Fuse from "fuse.js";
import Link from "next/link";
import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Tool, tools } from "@/tools";

export type MenuProps = {
  open: boolean;
  onClose: () => void;
};

const Menu: React.FC<MenuProps> = memo(props => {
  const { open, onClose } = props;

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [searchText, setSearchText] = useState<string>("");

  const handleClickSearchInput = useCallback(() => {
    searchInputRef.current?.focus();
  }, []);

  const handleChangeSearchText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.currentTarget.value);
    },
    [],
  );

  const filteredTools = useMemo(() => {
    const trimmedSearchText = searchText.trim();
    if (trimmedSearchText === "") {
      return tools;
    }

    const fuse = new Fuse(tools, {
      keys: ["title"],
    });

    return fuse.search(trimmedSearchText).map(result => result.item);
  }, [searchText]);

  const groups: { name: string; tools: Tool[] }[] = useMemo(() => {
    const groups = filteredTools.reduce<Record<string, Tool[]>>(
      (result, current) => {
        if (!result[current.group]) {
          result[current.group] = [];
        }
        result[current.group].push(current);
        return result;
      },
      {},
    );

    return Object.entries(groups).map(([key, tools]) => ({ name: key, tools }));
  }, [filteredTools]);

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
          "fixed top-0 left-0 z-50 h-full w-2/3 border-r bg-white duration-300 ease-in-out sm:w-[200px] sm:-translate-x-0",
          {
            "-translate-x-0": open,
            "-translate-x-full": !open,
          },
        )}
      >
        <div className="flex h-[60px] items-center border-b p-3">
          <div
            className="flex w-full cursor-text items-center overflow-hidden rounded border pl-2"
            onClick={handleClickSearchInput}
          >
            <AiOutlineSearch className="mr-1" />
            <input
              ref={searchInputRef}
              className="w-0 grow py-1 pr-2 outline-none"
              type="text"
              value={searchText}
              onChange={handleChangeSearchText}
            />
          </div>
        </div>
        <div>
          {groups.map(group => (
            <div key={group.name} className="border-b">
              <div className="border-b p-4 text-sm text-gray-500 sm:py-1">
                {group.name}
              </div>
              {group.tools.map(tool => (
                <Link key={tool.href} href={tool.href}>
                  <a>
                    <div className="flex items-center p-4 hover:bg-gray-100 active:bg-gray-200 sm:py-3 sm:text-sm">
                      <span className="mr-1">
                        {React.createElement(tool.icon)}
                      </span>
                      {tool.title}
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

Menu.displayName = "Menu";

export default Menu;
