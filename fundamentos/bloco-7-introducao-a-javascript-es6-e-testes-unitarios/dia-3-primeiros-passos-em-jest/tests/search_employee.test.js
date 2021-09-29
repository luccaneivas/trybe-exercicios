const searchEmployee = require('../search_employee');
// Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada. Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada" . Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível" .

describe('searchEmployee function', () => {
  it('Is a function', () => {
    expect( typeof searchEmployee ).toBe('function');
  })
  it('return "Paul" when parameter is ("4678-2", "firstName")', () => {
    expect( searchEmployee("4678-2", "firstName") ).toBe('Paul');
  })
  it('return "ID não identificada" when parameter is ("0002-8922", "firstName")', () => {
    expect( searchEmployee("0002-8922", "firstName") ).toBe('ID não identificada');
  })
  it('return "Informação indisponível" when parameter is ("4678-2", "favoriteFood")', () => {
    expect( searchEmployee("4678-2", "favoriteFood") ).toBe('Informação indisponível');
  })
});