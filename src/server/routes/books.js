const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

router.get('/', (req, res, next) => {
  knex('books').select(
    'books.id as book_id',
    'book_title',
    'genre',
    'description',
    'book_cover',
    'author1_id',
    'author2_id',
    'author3_id',
    'a.name as author1',
    'a2.name as author2',
    'a3.name as author3')
    .leftJoin('authors as a', 'author1_id', '=', 'a.id')
    .leftJoin('authors as a2', 'author2_id', '=', 'a2.id')
    .leftJoin('authors as a3', 'author3_id', '=', 'a3.id')
  .then((books) => {
    console.log(books);
    res.render('books/books.html', {books});
  })
  .catch((err) => {
    return next(err);
  });
});

router.get('/:id', (req, res, next) => {
  
})

module.exports = router;
