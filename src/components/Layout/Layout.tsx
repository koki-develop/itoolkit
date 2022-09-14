import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo, useCallback, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Menu from "./Menu";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = memo(props => {
  const { children } = props;

  const router = useRouter();

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = useCallback(() => setOpenMenu(prev => !prev), []);
  const handleCloseMenu = useCallback(() => setOpenMenu(false), []);

  useEffect(() => {
    setOpenMenu(false);
  }, [router.pathname]);

  return (
    <div
      className={classNames(
        "flex min-h-screen flex-col transition-all duration-300 ease-in-out sm:ml-[200px]",
      )}
    >
      <Menu open={openMenu} onClose={handleCloseMenu} />

      <header className="flex items-center justify-center bg-teal-500 p-4 py-4">
        <div className="container flex text-xl font-semibold text-white">
          <button
            className={classNames("mr-4 sm:hidden")}
            onClick={handleOpenMenu}
          >
            <AiOutlineMenu />
          </button>
          <h1>
            <Link href="/">
              <a>iToolkit</a>
            </Link>
          </h1>
        </div>
      </header>

      <main className="flex grow justify-center px-4 py-2">
        <div className="container flex flex-col">{children}</div>
      </main>
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;
