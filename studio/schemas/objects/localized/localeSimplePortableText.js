// import supportedLanguages from "../../locales/locales";
export const supportedLanguages = [
  { id: "en", title: "English", isDefault: true },
  { id: "es", title: "Spanish" }
  // Add as many languages as you need to support
];
export default {
  name: "localeSimplePortableText",
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
    type: "simplePortableText",
    fieldset: lang.isDefault ? null : "translations"
  }))
};
