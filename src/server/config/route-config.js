(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const booksRoutes = require('../routes/books');
    const authorsRoutes = require('../routes/authors');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/books', booksRoutes);
    app.use('/authors', authorsRoutes);

  };

})(module.exports);
