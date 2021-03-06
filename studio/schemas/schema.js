// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
import sampleProject from "./documents/sampleProject";
import siteSettings from "./documents/siteSettings";
import siteNavigation from "./documents/siteNavigation";
// Object types
import bioPortableText from "./objects/bioPortableText";
import localeBioPortableText from "./objects/localized/localeBioPortableText";
import figure from "./objects/figure";
import localeText from "./objects/localized/localeText";

// import projectMember from "./objects/projectMember";
import projectPortableText from "./objects/projectPortableText";
import localeProjectPortableText from "./objects/localized/localeProjectPortableText";
import simplePortableText from "./objects/simplePortableText";
import localeSimplePortableText from "./objects/localized/localeSimplePortableText";
import localeString from "./objects/localized/localeString";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "portfolio",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    projectPortableText,
    simplePortableText,
    localeProjectPortableText,
    localeBioPortableText,
    localeSimplePortableText,
    localeString,
    // localeText,
    // The following are document types which will appear
    // in the studio.
    sampleProject,
    siteSettings
    // siteNavigation
  ])
});
