import Link from "next/link";
import React, { memo } from "react";
import { useI18n } from "@/hooks/i18nHooks";

const LayoutMenuFooter: React.FC = memo(() => {
  const { t } = useI18n();

  return (
    <div className="-mt-[1px] flex flex-col items-center justify-center border-t py-2 text-sm dark:border-t-stone-600">
      <div className="mb-1">&copy;2022</div>
      <div>
        <Link href="/privacy">
          <a>{t.privacy.title}</a>
        </Link>
      </div>
    </div>
  );
});

LayoutMenuFooter.displayName = "LayoutMenuFooter";

export default LayoutMenuFooter;
