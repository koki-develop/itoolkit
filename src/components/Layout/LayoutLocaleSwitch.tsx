import classNames from "classnames";
import { useRouter } from "next/router";
import React, { memo, useCallback, useMemo, useState } from "react";
import { HiOutlineTranslate } from "react-icons/hi";
import Link from "@/components/util/Link";
import Popper from "@/components/util/Popper";
import { Locale, useI18n } from "@/hooks/i18nHooks";

const LayoutLocaleSwitch: React.FC = memo(() => {
  const router = useRouter();

  const { locale } = useI18n();

  const [openList, setOpenList] = useState<boolean>(false);

  const items: { text: string; locale: Locale }[] = useMemo(() => {
    return [
      {
        text: "English",
        locale: "en",
      },
      {
        text: "日本語",
        locale: "ja",
      },
    ];
  }, []);

  const handleOpenList = useCallback(() => setOpenList(true), []);
  const handleCloseList = useCallback(() => setOpenList(false), []);

  return (
    <div className="relative mr-4 flex items-center justify-center">
      <button onClick={handleOpenList}>
        <HiOutlineTranslate className="text-2xl" />
      </button>
      <Popper open={openList} onClose={handleCloseList}>
        {items.map(item => (
          <Link
            key={item.locale}
            href={router.pathname}
            locale={item.locale}
            className={classNames(
              "flex w-full items-center whitespace-nowrap px-3 py-2 hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-stone-700 dark:active:bg-stone-600",
              {
                "bg-gray-200 dark:bg-stone-700": item.locale === locale,
              },
            )}
            onClick={handleCloseList}
          >
            {item.text}
          </Link>
        ))}
      </Popper>
    </div>
  );
});

LayoutLocaleSwitch.displayName = "LayoutLocaleSwitch";

export default LayoutLocaleSwitch;
