import enUS from '../data/locales/en-US.json';
import esES from '../data/locales/es-ES.json';
import ptBR from '../data/locales/pt-BR.json';

export function getTranslation(locale: string) {
  switch (locale) {
    case "en-US":
      return enUS;
    case "es-ES":
      return esES;
    case "pt-BR":
    default:
      return ptBR;
  }
}
