// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import custom schemas
import { richText } from './util/richText'

import { siteText } from './base/SiteText'
import { siteImage } from './base/SiteImage'
import { artWork } from './base/artWork'
import { artWorkCategory } from './base/artWorkCategory'
import { exhibition } from './base/exhibition'
import { exhibitionHighlightPhoto } from './base/exhibitionHighlightPhoto'
import { testimonial } from './base/testimonial'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    // Base Schemas
    siteText,
    siteImage,
    artWorkCategory,
    artWork,
    exhibition,
    exhibitionHighlightPhoto,
    testimonial,

    // Util Schemas
    richText,
  ]),
})
