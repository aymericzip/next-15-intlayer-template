"use client";

import type { FC } from "react";
import {
  Locales,
  getHTMLTextDir,
  getLocaleName,
  getLocalizedUrl,
} from "intlayer";
import { useIntlayer, useLocale } from "next-intlayer";
import Link from "next/link";

export const LocaleSwitcher: FC = () => {
  const { locale, pathWithoutLocale, availableLocales, setLocale } =
    useLocale();
  const { buttonText } = useIntlayer("locale-switcher");

  return (
    <>
      <button
        popoverTarget="localePopover"
        className="flex-col rounded-full w-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
      >
        {getLocaleName(locale)}
        <span className="text-sm text-white/30">{buttonText}</span>
      </button>
      <ol
        id="localePopover"
        popover="auto"
        className="bg-slate-200/50 rounded-lg left-auto top-auto right-20 bottom-5"
      >
        {availableLocales.map((localeItem) => (
          <li key={localeItem}>
            <Link
              href={getLocalizedUrl(pathWithoutLocale, localeItem)}
              hrefLang={localeItem}
              aria-current={locale === localeItem ? "page" : undefined}
              onClick={(e) => {
                e.preventDefault();
                setLocale(localeItem);
              }}
              className="flex flex-row items-center justify-between gap-3 px-2 py-1"
            >
              <div className="flex flex-row items-center justify-between gap-3 px-2 py-1">
                <div className="flex flex-col text-nowrap">
                  <span dir={getHTMLTextDir(localeItem)} lang={localeItem}>
                    {/* Language in current Locale - e.g. Francés with current locale set to Locales.SPANISH */}
                    {getLocaleName(localeItem)}
                  </span>
                  <span
                    dir="ltr"
                    lang={Locales.ENGLISH}
                    className="text-slate text-xs"
                  >
                    {/* Language in English - e.g. French */}
                    {getLocaleName(localeItem, Locales.ENGLISH)}
                  </span>
                </div>
                <span className="text-slate text-sm">
                  {localeItem.toUpperCase()}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
};
