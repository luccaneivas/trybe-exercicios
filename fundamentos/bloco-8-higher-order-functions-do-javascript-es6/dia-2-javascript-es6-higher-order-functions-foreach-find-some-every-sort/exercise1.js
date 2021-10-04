// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find .
const assert = require('assert');
const books = require('./script');

function authorBornIn1947() {
  let result = books.find(item => item.author.birthYear === 1947);
  
  return result.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');