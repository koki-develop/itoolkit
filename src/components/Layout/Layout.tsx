import classNames from "classnames";
import { useRouter } from "next/router";
import React, { memo, useCallback, useEffect, useState } from "react";
import LayoutHeader from "./LayoutHeader";
import LayoutMenu from "./LayoutMenu";
import LayoutMenuOverlay from "./LayoutMenuOverlay";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = memo(props => {
  const { children } = props;

  const router = useRouter();

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = useCallback(() => setOpenMenu(true), []);
  const handleCloseMenu = useCallback(() => setOpenMenu(false), []);

  useEffect(() => {
    setOpenMenu(false);
  }, [router.pathname]);

  return (
    <div
      className={classNames(
        "flex min-h-screen flex-col transition-all duration-300 ease-in-out md:ml-[240px]",
      )}
    >
      <LayoutMenuOverlay
        className="md:hidden"
        show={openMenu}
        onClick={handleCloseMenu}
      />
      <LayoutMenu open={openMenu} />
      <LayoutHeader onOpenMenu={handleOpenMenu} />

      <main className="flex grow justify-center px-4 py-2">
        <div className="container flex flex-col">{children}</div>
      </main>
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;
