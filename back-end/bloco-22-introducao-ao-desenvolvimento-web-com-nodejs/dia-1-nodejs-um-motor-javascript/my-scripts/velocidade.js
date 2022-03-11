const readline = require('readline-sync');

function velocidade(distancia, tempo) {
    return (distancia / tempo);
}

function main() {
    const distancia = readline.questionInt('Qual a distância percorrida? (metros) ');
    const tempo = readline.questionInt('Qual o tempo da deslocação? (segundos) ');
    const result = velocidade(distancia, tempo);

    console.log(`A velocidade média é de ${result}m/s.`)
}

main();

module.exports = main;