/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('example').del()
  await knex('example').insert([{ id: 1, word: 'example words' }])
}
