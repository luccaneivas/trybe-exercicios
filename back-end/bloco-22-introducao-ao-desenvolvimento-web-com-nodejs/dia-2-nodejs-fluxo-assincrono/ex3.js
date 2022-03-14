/*Reescreva o código do exercício anterior para que utilize async/await .
Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .*/

const someStuff = require('./ex1');

function random() {
    return Math.floor(Math.random() * 100 + 1);
}

async function exercise() {
    try {
        await someStuff(random(), random(), random())
    } catch (err) {
        console.error(err);
    }
}

exercise()