import { useRouter } from "next/router";
import React, { memo, useCallback, useState } from "react";
import { HiOutlineTranslate } from "react-icons/hi";
import LinkButton from "@/components/util/LinkButton";
import Popper from "@/components/util/Popper";
import { Locale, useI18n } from "@/hooks/i18nHooks";

type LocaleItem = {
  text: string;
  locale: Locale;
};

const items: LocaleItem[] = [
  { text: "English", locale: "en" },
  { text: "日本語", locale: "ja" },
];

const LayoutLocaleSwitch: React.FC = memo(() => {
  const router = useRouter();

  const { locale } = useI18n();

  const [openList, setOpenList] = useState<boolean>(false);

  const handleOpenList = useCallback(() => setOpenList(true), []);
  const handleCloseList = useCallback(() => setOpenList(false), []);

  return (
    <div className="relative mr-4 flex items-center justify-center">
      <button onClick={handleOpenList}>
        <HiOutlineTranslate />
      </button>
      <Popper open={openList} onClose={handleCloseList}>
        {items.map(item => (
          <LinkButton
            key={item.locale}
            href={router.pathname}
            locale={item.locale}
            className="w-full px-3 py-2 text-base"
            active={item.locale === locale}
            onClick={handleCloseList}
          >
            {item.text}
          </LinkButton>
        ))}
      </Popper>
    </div>
  );
});

LayoutLocaleSwitch.displayName = "LayoutLocaleSwitch";

export default LayoutLocaleSwitch;
