/*Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .*/

const fs = require('fs').promises;
async function exercise() {
    const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

    const createFile = strings.map((string, index) => fs.writeFile(`file${index + 1}.txt`, string));

    await Promise.all(createFile);

    const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

    const readFiles = await Promise.all(
        fileNames.map((file) => fs.readFile(file, 'utf-8'))
    )
    
    const allFiles = readFiles.join(' ');

    await fs.writeFile('fileAll.txt', allFiles);
}

exercise();