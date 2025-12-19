import { type SchemaTypeDefinition } from 'sanity'
import { profileType } from './profile'
import { postType } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profileType, postType],
}
