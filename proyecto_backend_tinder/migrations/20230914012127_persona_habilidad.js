/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('persona_habilidad', (table) => {
        table.increments('id_personahabilidad').primary();
        table.bigInteger('id_personas');
        table.bigInteger('id_habilidades');
        table.foreign('id_personas').references('id').inTable('personas')
        table.foreign('id_habilidades').references('id').inTable('habilidades')
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    
};
