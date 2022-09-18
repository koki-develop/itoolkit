import classNames from "classnames";
import React, { memo, useCallback, useState } from "react";
import { useToolGroups, useTools } from "@/hooks/toolHooks";
import LayoutMenuFooter from "./LayoutMenuFotter";
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

  const tools = useTools(searchText);
  const groups = useToolGroups(tools);

  const handleChangeSearchText = useCallback((searchText: string) => {
    setSearchText(searchText);
  }, []);

  return (
    <>
      <LayoutMenuOverlay className="sm:hidden" show={open} onClick={onClose} />

      <div
        className={classNames(
          "fixed top-0 left-0 z-50 flex h-full w-2/3 flex-col border-r bg-white duration-300 ease-in-out dark:border-r-stone-700 dark:bg-stone-800 sm:w-[220px] sm:-translate-x-0",
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
        <div className="grow overflow-y-auto">
          {groups.map(group => (
            <div key={group.name} className="border-b dark:border-b-stone-600">
              <div className="border-b px-4 py-2 text-sm text-gray-500 dark:border-b-stone-600 dark:text-gray-400 sm:py-1">
                {group.name}
              </div>
              {group.tools.map(tool => (
                <LayoutMenuItem key={tool.href} tool={tool} />
              ))}
            </div>
          ))}
        </div>

        <LayoutMenuFooter />
      </div>
    </>
  );
});

LayoutMenu.displayName = "LayoutMenu";

export default LayoutMenu;
