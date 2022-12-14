import classNames from "classnames";
import React, { memo, useCallback, useState } from "react";
import { useToolGroups, useTools } from "@/hooks/toolHooks";
import LayoutMenuFooter from "./LayoutMenuFotter";
import LayoutMenuHeader from "./LayoutMenuHeader";
import LayoutMenuItem from "./LayoutMenuItem";

export type LayoutMenuProps = {
  open: boolean;
  openMobile: boolean;
  onClose: () => void;
};

const LayoutMenu: React.FC<LayoutMenuProps> = memo(props => {
  const { open, openMobile, onClose } = props;

  const [searchText, setSearchText] = useState<string>("");

  const tools = useTools(searchText);
  const groups = useToolGroups(tools);

  const handleChangeSearchText = useCallback((searchText: string) => {
    setSearchText(searchText);
  }, []);

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 z-50 flex h-full w-3/4 flex-col border-r bg-white duration-300 ease-in-out dark:border-r-stone-700 dark:bg-stone-800 md:w-[240px]",
        {
          "md:-translate-x-0": open,
          "md:-translate-x-full": !open,
        },
        {
          "-translate-x-0": openMobile,
          "-translate-x-full": !openMobile,
        },
      )}
    >
      {/* Header */}
      <LayoutMenuHeader
        searchText={searchText}
        onClose={onClose}
        onChangeSearchText={handleChangeSearchText}
      />

      {/* MenuList */}
      <div className="grow overflow-y-auto">
        {groups.map(group => (
          <div key={group.name} className="border-b dark:border-b-stone-600">
            <div className="border-b px-4 py-2 text-sm text-gray-500 dark:border-b-stone-600 dark:text-gray-400 md:py-1">
              {group.name}
            </div>
            {group.tools.map(tool => (
              <LayoutMenuItem key={tool.href} tool={tool} />
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <LayoutMenuFooter />
    </div>
  );
});

LayoutMenu.displayName = "LayoutMenu";

export default LayoutMenu;
