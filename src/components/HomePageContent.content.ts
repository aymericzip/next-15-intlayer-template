import { t, type DeclarationContent } from "intlayer";

const homeContent = {
  key: "home",
  content: {
    logoAlt: t({
      en: "Next.js logo",
      fr: "Logo de Next.js",
      es: "Logotipo de Next.js",
    }),
    getStarted: t({
      en: "Get started by editing",
      fr: "Commencez par éditer",
      es: "Comience por editar",
    }),
    filePath: "src/app/page.tsx",
    saveChanges: t({
      en: "Save and see your changes instantly.",
      fr: "Enregistrez et voyez vos modifications instantanément.",
      es: "Guarde y vea sus cambios al instante.",
    }),
    deployNow: t({
      en: "Deploy now",
      fr: "Déployez maintenant",
      es: "Despliegue ahora",
    }),
    readDocs: t({
      en: "Read our docs",
      fr: "Lisez notre documentation",
      es: "Lea nuestra documentación",
    }),
    footerLinks: {
      learn: t({
        en: "Learn",
        fr: "Apprendre",
        es: "Aprender",
      }),
      examples: t({
        en: "Examples",
        fr: "Exemples",
        es: "Ejemplos",
      }),
      goToNextJs: t({
        en: "Go to nextjs.org →",
        fr: "Aller sur nextjs.org →",
        es: "Ir a nextjs.org →",
      }),
    },
  },
} satisfies DeclarationContent;

export default homeContent;
