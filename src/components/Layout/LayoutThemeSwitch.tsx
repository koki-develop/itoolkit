import classNames from "classnames";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { IconType } from "react-icons";
import { MdComputer, MdDarkMode, MdLightMode } from "react-icons/md";
import Button from "@/components/util/Button";
import Popper from "@/components/util/Popper";
import { useI18n } from "@/hooks/i18nHooks";
import { useTheme, Theme } from "@/hooks/themeHooks";

const selectIcon = (theme: Theme): IconType => {
  return {
    light: MdLightMode,
    dark: MdDarkMode,
    system: MdComputer,
  }[theme];
};

const LayoutThemeSwitch: React.FC = memo(() => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const { t } = useI18n();

  const [mounted, setMounted] = useState<boolean>(false);
  const [openList, setOpenList] = useState<boolean>(false);

  const handleOpenList = useCallback(() => setOpenList(true), []);
  const handleCloseList = useCallback(() => setOpenList(false), []);

  const handleSelectTheme = useCallback(
    (theme: Theme) => {
      setTheme(theme);
      setOpenList(false);
    },
    [setTheme],
  );

  const handleSelectSystem = useCallback(
    () => handleSelectTheme("system"),
    [handleSelectTheme],
  );
  const handleSelectDark = useCallback(
    () => handleSelectTheme("dark"),
    [handleSelectTheme],
  );
  const handleSelectLight = useCallback(
    () => handleSelectTheme("light"),
    [handleSelectTheme],
  );

  const items = useMemo(() => {
    return [
      {
        text: t.themes.light,
        theme: "light",
        icon: MdLightMode,
        onClick: handleSelectLight,
      },
      {
        text: t.themes.dark,
        theme: "dark",
        icon: MdDarkMode,
        onClick: handleSelectDark,
      },
      {
        text: t.themes.system,
        theme: "system",
        icon: MdComputer,
        onClick: handleSelectSystem,
      },
    ];
  }, [
    handleSelectDark,
    handleSelectLight,
    handleSelectSystem,
    t.themes.dark,
    t.themes.light,
    t.themes.system,
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative mr-4 flex items-center justify-center">
      <button onClick={handleOpenList}>
        {React.createElement(selectIcon(resolvedTheme))}
      </button>
      <Popper open={openList} onClose={handleCloseList}>
        {items.map(item => (
          <Button
            key={item.text}
            className={classNames("w-full px-3 py-2 text-base")}
            active={item.theme === theme}
            onClick={item.onClick}
          >
            {React.createElement(item.icon, { className: "mr-2" })}
            {item.text}
          </Button>
        ))}
      </Popper>
    </div>
  );
});

LayoutThemeSwitch.displayName = "LayoutThemeSwitch";

export default LayoutThemeSwitch;
