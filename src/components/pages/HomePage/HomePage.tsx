import { NextPage } from "next";
import React, { useCallback, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Page from "@/components/util/Page";
import { useToolGroups, useTools } from "@/hooks/toolHooks";
import HomeToolCard from "./HomeToolCard";

const HomePage: NextPage = () => {
  const [searchText, setSearchText] = useState<string>("");

  const tools = useTools(searchText);
  const groups = useToolGroups(tools);

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const handleClickSearchInput = useCallback(() => {
    searchInputRef.current?.focus();
  }, []);

  const handleChangeSearchText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.currentTarget.value);
    },
    [],
  );

  return (
    <Page>
      <div
        className="my-4 flex w-full cursor-text items-center overflow-hidden rounded border py-1 pl-2 dark:border-stone-600"
        onClick={handleClickSearchInput}
      >
        <AiOutlineSearch className="mr-1" />
        <input
          ref={searchInputRef}
          placeholder="Search Tools (/)"
          className="w-0 grow bg-transparent py-1 pr-2 outline-none"
          type="text"
          value={searchText}
          onChange={handleChangeSearchText}
        />
      </div>

      {groups.map(group => (
        <div key={group.name} className="mb-4">
          <div className="mb-2">{group.name}</div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
            {group.tools.map(tool => (
              <HomeToolCard key={tool.href} tool={tool} />
            ))}
          </div>
        </div>
      ))}
    </Page>
  );
};

export default HomePage;
