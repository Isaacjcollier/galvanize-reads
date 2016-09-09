const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  knex('authors').select('*')
  .then((authors) => {
    authors.forEach((author) => {
      author.writtenBooks = [];
    });
    knex('books').select('*')
    .then((books) => {
      authors.forEach((author) => {
      for (var i = 0; i < books.length; i++) {
        if (books[i].author1_id === author.id || books[i].author2_id === author.id || books[i].author3_id === author.id) {
          author.writtenBooks.push(books[i])
        }
      }
    })
    res.render('authors/authors.html', {authors})
    })
    .catch((err) => {
      return next(err);
    });
  })
  .catch((err) => {
    return next(err);
  });
});

module.exports = router;
