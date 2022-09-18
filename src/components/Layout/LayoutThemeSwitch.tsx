import classNames from "classnames";
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { IconType } from "react-icons";
import { MdComputer, MdDarkMode, MdLightMode } from "react-icons/md";
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

  const panelRef = useRef<HTMLDivElement | null>(null);

  const [mounted, setMounted] = useState<boolean>(false);
  const [openList, setOpenList] = useState<boolean>(false);

  const handleOpenList = useCallback(() => {
    setOpenList(true);
  }, []);

  const handleCloseList = useCallback((e: MouseEvent) => {
    if (!panelRef.current?.contains(e.target as Node)) {
      setOpenList(false);
    }
  }, []);

  const handleSelectSystem = useCallback(() => {
    setTheme("system");
    setOpenList(false);
  }, [setTheme]);

  const handleSelectDark = useCallback(() => {
    setTheme("dark");
    setOpenList(false);
  }, [setTheme]);

  const handleSelectLight = useCallback(() => {
    setTheme("light");
    setOpenList(false);
  }, [setTheme]);

  const items = useMemo(() => {
    return [
      {
        text: "Light",
        theme: "light",
        icon: MdLightMode,
        onClick: handleSelectLight,
      },
      {
        text: "Dark",
        theme: "dark",
        icon: MdDarkMode,
        onClick: handleSelectDark,
      },
      {
        text: "System",
        theme: "system",
        icon: MdComputer,
        onClick: handleSelectSystem,
      },
    ];
  }, [handleSelectDark, handleSelectLight, handleSelectSystem]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseList);
    return () => {
      document.removeEventListener("mousedown", handleCloseList);
    };
  }, [handleCloseList]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative mr-4 flex items-center justify-center">
      <button onClick={handleOpenList}>
        {React.createElement(selectIcon(resolvedTheme), {
          className: "text-2xl",
        })}
      </button>
      <div
        ref={panelRef}
        className={classNames(
          "absolute top-8 right-0 rounded border bg-white text-black dark:border-stone-700 dark:bg-stone-800 dark:text-white",
          { hidden: !openList },
        )}
      >
        {items.map(item => (
          <button
            key={item.text}
            className={classNames(
              "flex w-full items-center px-3 py-2 hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-stone-700 dark:active:bg-stone-600",
              {
                "bg-gray-200 dark:bg-stone-700": item.theme === theme,
              },
            )}
            onClick={item.onClick}
          >
            {React.createElement(item.icon, { className: "mr-2" })}
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
});

LayoutThemeSwitch.displayName = "LayoutThemeSwitch";

export default LayoutThemeSwitch;
