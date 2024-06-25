import { db, Contact } from 'astro:db';

// https://astro.build/db/seed
export default async function() {
	await db.insert(Contact).values({
		name: "Prueba",
		email: 'prueba@mail.com',
		phone: 'teléfono'
	})
}
