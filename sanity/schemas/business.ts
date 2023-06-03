import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'business',
  title: 'Business',
  type: 'document',
  fields: [


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
  ]
})