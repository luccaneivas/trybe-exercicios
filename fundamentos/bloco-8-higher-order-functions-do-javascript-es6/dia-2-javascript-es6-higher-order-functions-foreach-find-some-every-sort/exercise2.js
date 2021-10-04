// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach .
const assert = require('assert');
const books = require('./script');

function smallerName() {
  let nameBook;

  books.forEach(item => {
    if (!nameBook || item.name.length < nameBook.length) {
      nameBook = item.name;
    }
  });

  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');