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
    <div>
      <header className="flex items-center bg-teal-500 px-6 py-4">
        <div className="flex text-white font-semibold text-xl">
          <button className="mr-2" onClick={handleOpenMenu}>
            <AiOutlineMenu />
          </button>
          <h1>
            <Link href="/">iToolkit</Link>
          </h1>
        </div>
      </header>

      <Drawer open={openMenu} onClose={handleCloseMenu}>
        drawer content
      </Drawer>

      <main>{children}</main>
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;
