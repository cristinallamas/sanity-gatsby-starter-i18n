// import supportedLanguages from "../../locales/locales";
export const supportedLanguages = [
  { id: "en", title: "English", isDefault: true },
  { id: "es", title: "Spanish" }
  // Add as many languages as you need to support
];
export default {
  name: "localeSlug",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: "slug",
    fieldset: lang.isDefault ? null : "translations",
    options: {
      maxLength: 96,
      source: `title.${lang.id}`
    }
  }))
};
