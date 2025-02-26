import { Dictionary, t } from "intlayer";

const serverComponentContent: Dictionary = {
  key: "server-component",
  content: {
    test: t({
      en: "Hello World",
      fr: "Bonjour le monde",
      es: "Hola Mundo",
    }),
  },
};

export default serverComponentContent;
