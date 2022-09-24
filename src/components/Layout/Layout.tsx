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

  const [openPcMenu, setOpenPcMenu] = useState<boolean>(true);
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const handleOpenMenu = useCallback(() => {
    setOpenPcMenu(true);
    setOpenMobileMenu(true);
  }, []);
  const handleCloseMenu = useCallback(() => {
    setOpenPcMenu(false);
    setOpenMobileMenu(false);
  }, []);

  useEffect(() => {
    setOpenMobileMenu(false);
  }, [router.pathname]);

  return (
    <div
      className={classNames(
        "flex min-h-screen flex-col transition-all duration-300 ease-in-out",
        {
          "md:ml-[240px]": openPcMenu,
        },
      )}
    >
      <LayoutMenuOverlay
        className="md:hidden"
        show={openMobileMenu}
        onClick={handleCloseMenu}
      />
      <LayoutMenu
        open={openPcMenu}
        openMobile={openMobileMenu}
        onClose={handleCloseMenu}
      />
      <LayoutHeader openMenu={openPcMenu} onOpenMenu={handleOpenMenu} />

      <main className="flex grow justify-center px-4 py-2">
        <div className="container flex flex-col">{children}</div>
      </main>
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;
