// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
const assert = require('assert');
const books = require('./script');

const expectedResult = false;

function authorUnique() {
  return books.every(book => 
    books.some(someBook =>
      book.author.birthYear === someBook.author.birthYear && book.author.name != someBook.author.name
    )
  );
}

assert.strictEqual(authorUnique(), expectedResult);