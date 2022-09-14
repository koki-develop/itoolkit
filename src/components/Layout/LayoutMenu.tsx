import classNames from "classnames";
import Fuse from "fuse.js";
import React, { memo, useCallback, useMemo, useState } from "react";
import { groupTools, Tool, tools } from "@/tools";
import LayoutMenuHeader from "./LayoutMenuHeader";
import LayoutMenuItem from "./LayoutMenuItem";
import LayoutMenuOverlay from "./LayoutMenuOverlay";

export type LayoutMenuProps = {
  open: boolean;
  onClose: () => void;
};

const LayoutMenu: React.FC<LayoutMenuProps> = memo(props => {
  const { open, onClose } = props;

  const [searchText, setSearchText] = useState<string>("");

  const handleChangeSearchText = useCallback((searchText: string) => {
    setSearchText(searchText);
  }, []);

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
    return groupTools(filteredTools);
  }, [filteredTools]);

  return (
    <>
      <LayoutMenuOverlay className="sm:hidden" show={open} onClick={onClose} />

      <div
        className={classNames(
          "fixed top-0 left-0 z-50 h-full w-2/3 border-r bg-white duration-300 ease-in-out sm:w-[200px] sm:-translate-x-0",
          {
            "-translate-x-0": open,
            "-translate-x-full": !open,
          },
        )}
      >
        <LayoutMenuHeader
          searchText={searchText}
          onChangeSearchText={handleChangeSearchText}
        />
        <div>
          {groups.map(group => (
            <div key={group.name} className="border-b">
              <div className="border-b px-4 py-2 text-sm text-gray-500 sm:py-1">
                {group.name}
              </div>
              {group.tools.map(tool => (
                <LayoutMenuItem key={tool.href} tool={tool} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

LayoutMenu.displayName = "LayoutMenu";

export default LayoutMenu;
