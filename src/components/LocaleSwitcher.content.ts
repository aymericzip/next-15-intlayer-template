import { t, type DeclarationContent } from "intlayer";

const homeContent = {
  key: "locale-switcher",
  content: {
    buttonText: t({
      en: "Click to switch language",
      fr: "Cliquez pour changer de langue",
      es: "Haga clic para cambiar de idioma",
    }),
  },
} satisfies DeclarationContent;

export default homeContent;
