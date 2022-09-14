import { useTheme } from "next-themes";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { MdComputer, MdDarkMode, MdLightMode } from "react-icons/md";

const LayoutThemeSwitch: React.FC = memo(() => {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();

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
    <div className="relative">
      <button onClick={handleOpenList}>theme</button>
      {openList && (
        <div
          ref={panelRef}
          className="absolute right-0 rounded border bg-white p-1 px-2 text-lg text-black"
        >
          <button className="flex items-center" onClick={handleSelectLight}>
            <MdLightMode className="mr-2" />
            Light
          </button>
          <button className="flex items-center" onClick={handleSelectDark}>
            <MdDarkMode className="mr-2" />
            Dark
          </button>
          <button className="flex items-center" onClick={handleSelectSystem}>
            <MdComputer className="mr-2" />
            System
          </button>
        </div>
      )}
    </div>
  );
});

LayoutThemeSwitch.displayName = "LayoutThemeSwitch";

export default LayoutThemeSwitch;
