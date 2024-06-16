import { db, Contact } from 'astro:db';

// https://astro.build/db/seed
export default async function() {
	await db.insert(Contact).values({
		name: "Name",
		email: 'name@mail.com',
		phone: 'phone number'
	})
}
