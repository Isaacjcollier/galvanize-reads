'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('Name Uknown');
    table.string('biography', [900]).notNullable();
    table.string('portrait', [900]).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
