'use strict';

exports.up = function(knex, Promise) {
  knex.schema.createTable('authors', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultTo('First Name Uknown');
    table.string('last_name').notNullable().defaultTo('Last Name Uknown');
    table.string('biography', [700]).notNullable();
    table.string('portrait', [700]).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('authors');
};
