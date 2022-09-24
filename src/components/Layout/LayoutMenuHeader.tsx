import React, { memo, useCallback, useRef } from "react";
import { AiOutlineLeft, AiOutlineSearch } from "react-icons/ai";

export type LayoutMenuHeaderProps = {
  searchText: string;
  onClose: () => void;
  onChangeSearchText: (searchText: string) => void;
};

const LayoutMenuHeader: React.FC<LayoutMenuHeaderProps> = memo(props => {
  const { searchText, onClose, onChangeSearchText } = props;

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
    <>
      <div className="hidden h-[60px] items-center justify-end border-b p-3 dark:border-b-stone-600 md:flex">
        <button onClick={onClose} className="rounded-full p-2">
          <AiOutlineLeft />
        </button>
      </div>
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
    </>
  );
});

LayoutMenuHeader.displayName = "LayoutMenuHeader";

export default LayoutMenuHeader;
