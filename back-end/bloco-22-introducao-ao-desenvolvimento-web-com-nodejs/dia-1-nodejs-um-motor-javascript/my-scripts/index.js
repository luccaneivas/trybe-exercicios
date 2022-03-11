const readline = require('readline-sync');

const options = ['IMC', 'Velocidade', 'Sorteio', 'Fatorial', 'Fibonacci'];

switch (readline.keyInSelect(options, "Selecione uma opção: ")) {
    case 0:
        require('./imc');
        break;
    case 1:
        require('./velocidade');
        break;
    case 2:
        require('./sorteio');
        break;
    case 3:
        require('./fatorial');
        break;
    case 4:
        require('./fibonacci');
    default:
        break;
}