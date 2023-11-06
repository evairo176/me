import "server-only";
import { i18n } from "../../i18n.config";

const dictionaries = {
  en: () =>
    import("../constans/language/en.json").then((module) => module.default),
  id: () =>
    import("../constans/language/id.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "id") =>
  dictionaries[
    i18n.locales.includes(locale) ? locale : (i18n.defaultLocale as "en" | "id")
  ](); // Add type assertion here
