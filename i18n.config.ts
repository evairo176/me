interface I18config {
  defaultLocale: string;
  locales: string[];
}

export const i18n: I18config = {
  defaultLocale: "en",
  locales: ["en", "id"],
};
