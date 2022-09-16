import { NextPage } from "next";
import React, { useMemo } from "react";
import Page from "@/components/util/Page";
import { groupTools, tools } from "@/tools";
import HomeToolCard from "./HomeToolCard";

const HomePage: NextPage = () => {
  const groups = useMemo(() => {
    return groupTools(tools);
  }, []);

  return (
    <Page>
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
