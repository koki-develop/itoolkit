import Link from "next/link";
import React, { memo, useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "../util/Drawer";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = memo((props) => {
  const { children } = props;

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = useCallback(() => setOpenMenu((prev) => !prev), []);
  const handleCloseMenu = useCallback(() => setOpenMenu(false), []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-center items-center bg-teal-500 p-4 py-4">
        <div className="flex text-white font-semibold text-xl container">
          <button className="mr-4" onClick={handleOpenMenu}>
            <AiOutlineMenu />
          </button>
          <h1>
            <Link href="/">
              <a>iToolkit</a>
            </Link>
          </h1>
        </div>
      </header>

      <Drawer open={openMenu} onClose={handleCloseMenu}>
        <Link href="/tools/url-encode-decode">
          <a>
            <div className="p-4 border-b hover:bg-gray-100 transition">
              URL Encode/Decode
            </div>
          </a>
        </Link>
      </Drawer>

      <main className="flex justify-center px-4 py-2 flex-grow">
        <div className="container flex flex-col">{children}</div>
      </main>
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;
