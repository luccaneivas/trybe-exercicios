const readline = require('readline-sync');

let number = 0;

while (number == 0) {
    number = readline.questionInt('Digite um número para fazer a fatorial: ');
}

function fatorial(number) {
    let result = number;
    number -= 1;
    while (number > 0) {
        result = result * number;
        number -= 1;
    }
    
    return result;
}

console.log(fatorial(number));