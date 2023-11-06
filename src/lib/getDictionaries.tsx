const dictionaries = {
  en: () =>
    import("../constans/language/en.json").then((module) => module.default),
  id: () =>
    import("../constans/language/id.json").then((module) => module.default),
};

export const getDictionary = (locale?: string) => {
  if (!locale || locale === undefined) {
    return dictionaries["en"]();
  } else {
    return dictionaries[locale as "en" | "id"]();
  }
};
