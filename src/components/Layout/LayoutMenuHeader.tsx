import React, { memo, useCallback, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export type LayoutMenuHeaderProps = {
  searchText: string;
  onChangeSearchText: (searchText: string) => void;
};

const LayoutMenuHeader: React.FC<LayoutMenuHeaderProps> = memo(props => {
  const { searchText, onChangeSearchText } = props;

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const handleClickSearchInput = useCallback(() => {
    searchInputRef.current?.focus();
  }, []);

  const handleChangeSearchText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChangeSearchText(event.currentTarget.value);
    },
    [onChangeSearchText],
  );

  return (
    <div className="flex h-[60px] items-center border-b p-3 dark:border-b-stone-600">
      <div
        className="flex w-full cursor-text items-center overflow-hidden rounded border pl-2 dark:border-stone-600"
        onClick={handleClickSearchInput}
      >
        <AiOutlineSearch className="mr-1" />
        <input
          ref={searchInputRef}
          placeholder="Search Tools"
          className="w-0 grow bg-transparent py-1 pr-2 outline-none md:text-sm"
          type="text"
          value={searchText}
          onChange={handleChangeSearchText}
        />
      </div>
    </div>
  );
});

LayoutMenuHeader.displayName = "LayoutMenuHeader";

export default LayoutMenuHeader;
