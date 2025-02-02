import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("products").del();


    await knex("products").insert([
        { "name": "Cheese Fries", "price": 8 },
        { "name": "Buffalo Wings", "price": 12.5 },
        { "name": "Mozzarella Sticks", "price": 9.1 },
        { "name": "Onion Rings", "price": 7 },
        { "name": "Garlic Shrimp", "price": 15.5 },
        { "name": "BBQ Ribs", "price": 18 },
        { "name": "Chicken Tenders", "price": 10.5 },
        { "name": "Nachos Supreme", "price": 14.9 },
        { "name": "Jalapeño Poppers", "price": 9 }
    ]);
};
