import { useTheme } from "next-themes";
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { MdComputer, MdDarkMode, MdLightMode } from "react-icons/md";

const LayoutThemeSwitch: React.FC = memo(() => {
  const { setTheme, resolvedTheme } = useTheme();

  const panelRef = useRef<HTMLDivElement | null>(null);

  const [mounted, setMounted] = useState<boolean>(false);
  const [openList, setOpenList] = useState<boolean>(false);

  const selectIcon = useCallback((theme?: string) => {
    switch (theme) {
      case "light":
        return MdLightMode;
      case "dark":
        return MdDarkMode;
      case "system":
        return MdComputer;
      default:
        return MdDarkMode;
    }
  }, []);

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
      { text: "Light", icon: MdLightMode, onClick: handleSelectLight },
      { text: "Dark", icon: MdDarkMode, onClick: handleSelectDark },
      { text: "System", icon: MdComputer, onClick: handleSelectSystem },
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
      {openList && (
        <div
          ref={panelRef}
          className="absolute top-8 right-0 rounded border bg-white text-black dark:border-stone-700 dark:bg-stone-800 dark:text-white"
        >
          {items.map(item => (
            <button
              key={item.text}
              className="flex w-full items-center px-3 py-2 hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-stone-700 dark:active:bg-stone-600"
              onClick={item.onClick}
            >
              {React.createElement(item.icon, { className: "mr-2" })}
              {item.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

LayoutThemeSwitch.displayName = "LayoutThemeSwitch";

export default LayoutThemeSwitch;
