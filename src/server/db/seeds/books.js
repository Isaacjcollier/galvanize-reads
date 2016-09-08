
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('books').insert({
          book_title: 'Python In A Nutshell',
          genre: 'Python',
          description: 'This book offers Python programmers one place to look when they need help remembering or deciphering the syntax of this open source language and its many powerful but scantily documented modules. This comprehensive reference guide makes it easy to look up the most frequently needed information--not just about the Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.',
          book_cover: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/python_in_a_nutshell.jpg',
          //Alex Martelli
          author1_id: knex('authors').select('id').where('first_name', 'Alex').where('last_name', 'Martelli'),
          // Anna Ravenscroft
          author2_id: knex('authors').select('id').where('first_name', 'Anna').where('last_name', 'Ravenscroft'),
          // Steve Holden
          author3_id: knex('authors').select('id').where('first_name', 'Steve').where('last_name', 'Holden')

        }),
        knex('books').insert({
          book_title: 'Think Python',
          genre: 'Python',
          description: 'If you want to learn how to program, working with Python is an excellent way to start. This hands-on guide takes you through the language a step at a time, beginning with basic programming concepts before moving on to functions, recursion, data structures, and object-oriented design. This second edition and its supporting code have been updated for Python 3.',
          book_cover: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/think_python.jpg',
          // Allen Downey
          author1_id: knex('authors').select('id').where('first_name', 'Allen').where('last_name', 'Downey'),
          author2_id: null,
          author3_id: null
        }),
        knex('books').insert({
          book_title: 'Learning React Native',
          genre: 'JavaScript',
          description: 'Get a practical introduction to React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native. With this hands-on guide, you’ll learn how to build applications that target iOS, Android, and other mobile platforms instead of browsers. You’ll also discover how to access platform features such as the camera, user location, and local storage.',
          book_cover: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/learning_react_native.jpg',
          //grabbing foreign key where first name and last name
          author1_id: knex('authors').select('id').where('first_name', 'Bonnie').where('last_name', 'Eisenman'),
          author2_id: null,
          author3_id: null
        }),
        knex('books').insert({
          book_title: 'You Don\'t Know JS: ES6 & Beyond',
          genre: 'JavaScript',
          description: 'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the ""You Don’t Know JS"" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.',
          book_cover: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/es6_and_beyond.jpg',
          //grabbing foreign key where first name and last name
          author1_id: knex('authors').select('id').where('first_name', 'Kyle').where('last_name', 'Simpson'),
          author2_id: null,
          author3_id: null
        }),
        knex('books').insert({
          book_title: 'You Don\'t Know JS: Scope & Closures',
          genre: 'JavaScript',
          description: 'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You’ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset.',
          book_cover: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/scope_and_closures.jpg',
          //grabbing foreign key where first name and last name
          author1_id: knex('authors').select('id').where('first_name', 'Kyle').where('last_name', 'Simpson'),
          author2_id: null,
          author3_id: null
        }),
        knex('books').insert({
          book_title: 'You Don\'t Know JS: Async & Performance',
          genre: 'JavaScript',
          description: 'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the ""You Don’t Know JS"" series, this concise yet in-depth guide focuses on new asynchronous features and performance techniques—including Promises, generators, and Web Workers—that let you create sophisticated single-page web applications and escape callback hell in the process.',
          book_cover: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/async_and_performance.jpg',
          //grabbing foreign key where first name and last name
          author1_id: knex('authors').select('id').where('first_name', 'Kyle').where('last_name', 'Simpson'),
          author2_id: null,
          author3_id: null
        })
      ]);
    });
};
