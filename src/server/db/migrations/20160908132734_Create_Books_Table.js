'use strict';

exports.up = function(knex, Promise) {
  knex.schema.createTable('books', (table) => {
    table.increments();
    table.string('book_title').unique().notNullable();
    table.integer('author1_id').notNullable();
    table.foreign('author1_id').references('id').inTable('authors');
    table.integer('author2_id');
    table.foreign('author2_id').references('id').inTable('authors');
    table.integer('author3_id');
    table.foreign('author3_id').referenes('id').inTable('authors');
    table.string('genre').notNullable();
    table.string('description', [700]).notNullable();
    table.string('book_cover', [700]).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  knex.schema().createTable('books', (table) => {
  });
};
