/* Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
Leia o arquivo.
Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
Caso o arquivo exista, solicite a palavra a ser substituída.
Solicite a nova palavra, que substituirá a palavra anterior.
Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
Pergunte o nome do arquivo de destino.
Salve o novo arquivo no caminho de destino.
Dica: Utilize a classe RegExp do JS para substituir todas as ocorrências da palavra com replace(new RegExp(palavra, 'g'), novaPalavra) . */

const readline = require('readline');
const fs = require('fs').promises;

function question(message) {
    const { stdin: input, stdout: output } = require('process');
    const rl = readline.createInterface({ input, output });
    
    return new Promise((resolve) => {
        rl.question(message, (answer) => {
            rl.close();

            resolve(answer);
        })
    })
}

async function main() {
    const fileName = await question('Qual arquivo deseja utilizar? ')
        .catch(err => console.log(`Erro ao ler o arquivo: ${err}`));
    
    const originalFile = await fs.readFile(fileName, 'utf-8')
        .catch(err => {
            console.log(err);
            return false;
        })
    
    if (!originalFile) return;

    const newWord = await question('Digite a nova palavra: ');
    const oldWord = await question('Digite a palavra a substituir: ');

    const newContent = originalFile.replace(new RegExp(oldWord, 'g'), newWord);
    console.log('Substituição:');
    console.log(newContent);

    const pathToSave = await question('Onde salvar o arquivo? ');
    await fs.writeFile(pathToSave, newContent);
}

main();