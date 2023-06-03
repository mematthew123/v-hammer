import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'business',
  title: 'Business',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        {name: 'monday', title: 'Monday', type: 'string'},
        {name: 'tuesday', title: 'Tuesday', type: 'string'},
        {name: 'wednesday', title: 'Wednesday', type: 'string'},
        {name: 'thursday', title: 'Thursday', type: 'string'},
        {name: 'friday', title: 'Friday', type: 'string'},
        {name: 'saturday', title: 'Saturday', type: 'string'},
        {name: 'sunday', title: 'Sunday', type: 'string'},
      ]
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
    prepare(selection) {
      return {...selection, subtitle: 'Business'}
    },
  },
})
