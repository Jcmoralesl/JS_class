/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('sales', (table) => {
        table.increments('id_check').primary();
        table.bigInteger('id_client');
        table.bigInteger('id_product');
        table.foreign('id_client').references('id').inTable('clients')
        table.foreign('id_product').references('id').inTable('products')
        table.decimal('total').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    
};
