import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { LocaleContext } from "~context";
import { createLocaleTextGetter } from "~lib";
import Layout from "./Layout";
// const query = graphql`
//   query LayoutQuery {
//     navigation: sanityMenu(_id: { regex: "/(drafts.|)mainNavigation/" }) {
//       _rawChildren(resolveReferences: { maxDepth: 5 })
//     }
//     footer: sanityFooter(_id: { regex: "/(drafts.|)footer/" }) {
//       _rawUpperSection
//       _rawDocs(resolveReferences: { maxDepth: 5 })
//     }
//     footerNavigation: sanityMenu(_id: { regex: "/(drafts.|)footerNavigation/" }) {
//       _rawChildren(resolveReferences: { maxDepth: 5 })
//     }
//   }
// `;
const LayoutContainer = ({ locale, ...rest }) => {
  // const { navigation, footerNavigation, footer } = useStaticQuery(query);
  const getLocalizedContent = createLocaleTextGetter(locale);
  return (
    <LocaleContext.Provider value={locale}>
      <Layout
        {...{
          ...rest
          // navigation: getLocalizedContent(navigation._rawChildren),
          // footerUpperSection: getLocalizedContent(footer._rawUpperSection),
          // footerNavigation: getLocalizedContent(footerNavigation._rawChildren),
          // footerDocs: getLocalizedContent(footer._rawDocs)
        }}
      />
    </LocaleContext.Provider>
  );
};
export default LayoutContainer;
