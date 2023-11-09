import cn from "@/constans/language/cn";
import { i18n } from "../../i18n.config";
import en from "@/constans/language/en";
import id from "@/constans/language/id";
import ru from "@/constans/language/ru";

const dictionaries: any = {
  en: en,
  id: id,
  ru: ru,
  cn: cn,
};

export const getDictionary = async (locale: string) =>
  dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale];
