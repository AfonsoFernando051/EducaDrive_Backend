/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('professores', table => {
    table.increments('id').primary()
    table.string('nome').notNullable()
    table.string('veiculo1').notNullable()
    table.string('veiculo2')
    table.integer('escola_id').references('id').inTable('users_school')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('professores');
};
