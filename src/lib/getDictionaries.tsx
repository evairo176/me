import { i18n } from "../../i18n.config";

const dictionaries: any = {
  en: () =>
    import("../constans/language/en.json").then((module) => module.default),
  id: () =>
    import("../constans/language/id.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) =>
  dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]();
