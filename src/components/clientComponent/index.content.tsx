import { Dictionary, t } from "intlayer";
import React, { ReactNode } from "react";

const clientComponentContent: Dictionary = {
  key: "client-component",
  content: {
    test: t<ReactNode>({
      en: "Hello World",
      fr: "Bonjour le monde",
      es: "Hola Mundo",
    }),
  },
};

export default clientComponentContent;
