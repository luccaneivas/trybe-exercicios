const readline = require('readline-sync');

function randomNo() {
    return Math.round(Math.random() * 11);
}

function main() {
    const answer = readline.questionInt("Tente acertar o número (0 a 10): ");
    const random = randomNo();

    if (answer == random) {
        console.log(`O número sorteado foi ${randomNo()}! Parabéns, número correto!`);
    } else {
        console.log(`Opa, não foi dessa vez. O número era ${random}.`);
    }

    const restart = readline.keyInYN("Deseja jogar novamente? ");
    if (restart) main();
}

main();

module.exports = main;