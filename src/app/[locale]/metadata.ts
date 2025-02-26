import { type IConfigLocales, getTranslation } from "intlayer";
import type { Metadata } from "next";
import type { LocalParams, LocalPromiseParams } from "next-intlayer";

export const generateMetadata = async ({
  params,
}: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;
  const t = <T>(content: IConfigLocales<T>) => getTranslation(content, locale);

  return {
    title: t<string>({
      en: "Intlayer | Demo",
      fr: "Intlayer | Démo",
      es: "Intlayer | Demostración",
    }),
    description: t<string>({
      en: "Try the new Intlayer online editor. Empower your teams to take control of your content and transform your application into a CMS.",
      es: "Pruebe el nuevo editor en línea de Intlayer. Permita que sus equipos tomen el control de su contenido y transformen su aplicación en un CMS.",
      fr: "Essayez le nouveau Intlayer editeur online. Permettez à vos équipes de prendre la main sur votre contenu et transformez votre application en CMS.",
    }),

    keywords: t<string[]>({
      en: [
        "Internationalization",
        "Intlayer",
        "Next.js",
        "JavaScript",
        "React",
      ],
      fr: [
        "Internationalisation",
        "Intlayer",
        "Next.js",
        "JavaScript",
        "React",
      ],
      es: [
        "Internacionalización",
        "Intlayer",
        "Next.js",
        "JavaScript",
        "React",
      ],
    }),
  };
};
