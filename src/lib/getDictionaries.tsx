import { i18n } from "../../i18n.config";
import en from "@/constans/language/en";
import id from "@/constans/language/id";

const dictionaries: any = {
  en: en,
  id: id,
};

export const getDictionary = async (locale: string) =>
  dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale];
