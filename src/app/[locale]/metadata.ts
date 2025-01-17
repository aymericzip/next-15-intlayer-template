import { getMultilingualUrls } from "intlayer";
import type { Metadata } from "next";
import { getIntlayer, type LocalParams } from "next-intlayer";

const URL = "/";

export const generateMetadata = async ({
  params,
}: LocalParams): Promise<Metadata> => {
  const { locale } = await params;

  /**
   * Generates an object containing all url for each locale.
   *
   * Example:
   * ```ts
   *  getMultilingualUrls('/about');
   *
   *  // Returns
   *  // {
   *  //   en: '/about',
   *  //   fr: '/fr/about',
   *  //   es: '/es/about',
   *  // }
   * ```
   */
  const multilingualUrls = getMultilingualUrls(URL);

  return {
    ...getIntlayer("home-page-metadata", locale),
    alternates: {
      canonical: URL,
      languages: { ...multilingualUrls, "x-default": URL },
    },
    openGraph: {
      url: multilingualUrls[locale as keyof typeof multilingualUrls],
    },
  };
};
