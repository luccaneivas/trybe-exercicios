const hydrate = (string) => {
  // código para extrair apenas integers de uma string (utilizada na linha 71) retirada deste link: https://stackoverflow.com/questions/30607419/return-only-numbers-from-string/30607466
  let numbers = string.replace(/\D/g, '');
  let result = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    result += Number(numbers[i]);
  }
  if (result === 1) {
    return `${result} copo de água`;
  } else {
    return `${result} copos de água`;
  }
}

module.exports = hydrate;