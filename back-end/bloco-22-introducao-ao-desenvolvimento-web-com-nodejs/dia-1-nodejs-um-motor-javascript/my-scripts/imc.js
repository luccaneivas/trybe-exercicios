const readline = require('readline-sync');

function imc(peso, altura) {
    return (peso / (altura ** 2)).toFixed(1);
}

function main() {
    const peso = readline.questionFloat('Qual seu peso? ');
    const altura = readline.question('Qual sua altura? ');
    const result = imc(peso, altura);
    let categoria = '';

    if (result < 18.5) categoria = "Abaixo do peso (magreza)";
    if (result >= 18.5 && result < 25) categoria = "Peso normal";
    if (result >= 25 && result < 30) categoria = "Acima do peso (sobrepeso)";
    if (result >= 30 && result < 35) categoria = "Obesidade grau I";
    if (result >= 35 && result < 40) categoria = "Obesidade grau II";
    if (result >= 40) categoria = "Obesidade graus III e IV";

    console.log(`O IMC para ${peso}kg e ${altura}m é ${result}, o que se enquadra como ${categoria}.`);
}

main();

module.exports = main;
