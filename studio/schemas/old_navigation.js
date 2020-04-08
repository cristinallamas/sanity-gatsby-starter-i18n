export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString"
    },
    {
      name: "menuItems",
      title: "Menu Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }, { type: "portfolio" }, { type: "page" }, { type: "aboutPage" }]
        }
      ]
    }
    // {
    //   name: "slug",
    //   title: "Slug",
    //   type: "localeSlug",
    //   description:
    //     "Some frontend will require a slug to be set to be able to show the project",
    //   validation: Rule => Rule.required()
    //   // options: {
    //   //   source: "title",
    //   //   maxLength: 96
    //   // }
    // }
  ],
  preview: {
    select: {
      title: "title.en"
      // media: "mainImage"
    }
  }
};
