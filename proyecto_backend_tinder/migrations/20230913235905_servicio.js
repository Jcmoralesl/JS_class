/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('servicio', (table) => {
        table.increments('id').primary();
        table.decimal('costo').notNullable();
        table.decimal('tiempo_trabajo').notNullable();
        table.date('fecha_entrega')
        table.boolean('anticipo')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    
};
