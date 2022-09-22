import classNames from "classnames";
import Link from "next/link";
import React, { memo } from "react";
import { AiOutlineGithub, AiOutlineMenu } from "react-icons/ai";
import Logo from "@/../public/logo.svg";
import { useI18n } from "@/hooks/i18nHooks";
import LayoutLocaleSwitch from "./LayoutLocaleSwitch";
import LayoutThemeSwitch from "./LayoutThemeSwitch";

export type LayoutHeaderProps = {
  onOpenMenu: () => void;
};

const LayoutHeader: React.FC<LayoutHeaderProps> = memo(props => {
  const { onOpenMenu } = props;

  const { t } = useI18n();

  return (
    <header className="sticky top-0 flex items-center justify-center bg-teal-500 p-4 py-4 dark:bg-stone-800 md:relative">
      <div className="container flex items-center justify-between text-white">
        <div className="flex items-center text-xl">
          <button className={classNames("mr-4 md:hidden")} onClick={onOpenMenu}>
            <AiOutlineMenu />
          </button>
          <h1>
            <Link href="/">
              <a>
                <Logo aria-label={t.app.name} />
              </a>
            </Link>
          </h1>
        </div>
        <div className="flex">
          <LayoutLocaleSwitch />
          <LayoutThemeSwitch />

          <a
            href="https://github.com/koki-develop/itoolkit"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiOutlineGithub className="text-2xl" />
          </a>
        </div>
      </div>
    </header>
  );
});

LayoutHeader.displayName = "LayoutHeader";

export default LayoutHeader;
