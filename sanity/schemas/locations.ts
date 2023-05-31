import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'locations',
  title: 'Locations',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [{type: 'geopoint'}],
    }),
  ],
})
