import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Contact = defineTable({
  columns: {
    name: column.text(),
    email: column.text(),
    phone: column.text(),
  }
})

export default defineDb({
  tables: { Contact }
});
