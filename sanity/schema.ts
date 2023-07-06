import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import products from './schemas/products'
import collections from './schemas/collections'
import author from './schemas/author'
import locations from './schemas/locations'
import business from './schemas/business'
import whitelistedEmail from './schemas/whitelistedEmail'
import wholesaleProducts from './schemas/wholesaleProducts'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, blockContent,products,collections,whitelistedEmail, wholesaleProducts, author, locations,business ],
}
