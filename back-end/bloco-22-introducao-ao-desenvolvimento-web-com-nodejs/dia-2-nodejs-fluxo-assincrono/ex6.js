/* Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
Pergunte à pessoa usuária qual arquivo ela deseja ler.
Leia o arquivo indicado.
Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
Caso o arquivo exista, escreva seu conteúdo na tela. */

const readline = require('readline');
const fs = require('fs').promises;
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Qual arquivo você deseja ler? ', (async (answer) => {
    try {
        const data = await fs.readFile(answer, 'utf-8');
        console.log(data);
    } catch (error) {
        console.log('Arquivo inexistente');
    }

    rl.close();
}))