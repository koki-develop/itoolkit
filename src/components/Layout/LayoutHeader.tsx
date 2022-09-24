import classNames from "classnames";
import React, { memo } from "react";
import { AiOutlineGithub, AiOutlineMenu } from "react-icons/ai";
import Logo from "@/../public/logo.svg";
import Link from "@/components/util/Link";
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
              <Logo aria-label={t.app.name} />
            </Link>
          </h1>
        </div>
        <div className="flex text-2xl">
          <LayoutLocaleSwitch />
          <LayoutThemeSwitch />

          <Link external href="https://github.com/koki-develop/itoolkit">
            <AiOutlineGithub />
          </Link>
        </div>
      </div>
    </header>
  );
});

LayoutHeader.displayName = "LayoutHeader";

export default LayoutHeader;
