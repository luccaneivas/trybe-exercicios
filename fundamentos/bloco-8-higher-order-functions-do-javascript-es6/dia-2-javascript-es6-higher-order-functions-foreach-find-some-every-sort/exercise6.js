// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
const assert = require('assert');
const books = require('./script');

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some(item => item.releaseYear >= 1980 && item.releaseYear < 1990);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);