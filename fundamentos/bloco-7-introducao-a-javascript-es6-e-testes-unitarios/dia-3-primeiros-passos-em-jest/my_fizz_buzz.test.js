// implemente seus testes aqui
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
const myFizzBuzz = require('./my_fizz_buzz');

describe('myFizzBuzz function', () => {
  it('return "fizzbuzz" when parameter is 15', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it('return "fizz" when parameter is 9', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })
  it('return "buzz" when parameter is 20', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  })
  it('return 19 when parameter is 19', () => {
    expect(myFizzBuzz(19)).toBe(19);
  })
  it('return false when parameter is not a number', () => {
    expect(myFizzBuzz('12')).toBe(false);
  })
});