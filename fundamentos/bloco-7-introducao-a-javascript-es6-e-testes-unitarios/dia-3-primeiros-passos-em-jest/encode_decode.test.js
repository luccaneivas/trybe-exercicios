const { encode, decode } = require('./encode_decode');

// Teste se encode e decode são funções;
// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

describe('encode function', () => {
  it('Is a function', () => {
    expect( typeof encode ).toBe('function');
  })
  it('return "1, 2, 3, 4, 5" when parameter is "a, e, i, o, u"', () => {
    expect( encode('a, e, i, o, u') ).toBe('1, 2, 3, 4, 5');
  })
  it('return "d, 2, b, 4, l" when parameter is "d, e, b, o, l"', () => {
    expect( encode('d, e, b, o, l') ).toBe('d, 2, b, 4, l');
  })
  it('return 5 when the length of "1, 9, 3, 7, 5" is tested', () => {
    expect( encode('1, 9, 3, 7, 5').length ).toBe(13);
  })
});

describe('decode function', () => {
  it('Is a function', () => {
    expect( typeof decode ).toBe('function');
  })
  it('return "a, e, i, o, u" when parameter is "1, 2, 3, 4, 5"', () => {
    expect( decode('1, 2, 3, 4, 5') ).toBe('a, e, i, o, u');
  })
  it('return "a, 9, i, 7, u" when parameter is "1, 9, 3, 7, 5"', () => {
    expect( decode('1, 9, 3, 7, 5') ).toBe('a, 9, i, 7, u');
  })
  it('return 5 when the length of "1, 9, 3, 7, 5" is tested', () => {
    expect( decode('1, 9, 3, 7, 5').length ).toBe(13);
  })
});