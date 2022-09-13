import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { tools } from "../../../tools";

const HomePage: NextPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
        {tools.map(tool => (
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
  );
};

export default HomePage;
