import ptBR from "../data/locales/pt-BR.json";

export function getTranslation(locale: string) {
  switch (locale) {
    case "pt-BR":
    default:
      return ptBR;
  }
}
