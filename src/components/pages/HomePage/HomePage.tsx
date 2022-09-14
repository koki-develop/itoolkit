import { NextPage } from "next";
import Link from "next/link";
import React, { useMemo } from "react";
import { groupTools, tools } from "@/tools";

const HomePage: NextPage = () => {
  const groups = useMemo(() => {
    return groupTools(tools);
  }, []);

  return (
    <div>
      {groups.map(group => (
        <div key={group.name} className="mb-4">
          <div className="mb-2">{group.name}</div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
            {group.tools.map(tool => (
              <Link key={tool.href} href={tool.href}>
                <a className="flex flex-col items-center justify-center rounded border py-8 text-xs hover:bg-gray-100 active:bg-gray-200">
                  <div>
                    {React.createElement(tool.icon, { className: "text-3xl" })}
                  </div>
                  <div>{tool.title}</div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
