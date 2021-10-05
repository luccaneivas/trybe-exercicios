const assert = require('assert');
const books = require('./script');

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const currentYear = new Date().getFullYear();
  const oldBooksList = books.filter((book) => (book.releaseYear < currentYear - 60));
  return oldBooksList.map((book) => book.name);
}

assert.deepStrictEqual(oldBooks(), expectedResult);