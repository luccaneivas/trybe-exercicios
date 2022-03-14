/*Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
*/

const fs = require('fs').promises;

const nomeArquivo = './simpsons.json';

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
function first() {
    fs.readFile(nomeArquivo, 'utf-8')
        .then(data => {
            const arr = JSON.parse(data);
            
            arr.forEach(person => {
                console.log(`${person.id} - ${person.name}`)
            });
        })
        .catch(err => console.log(err));
}
//first();

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
function second(id) {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(nomeArquivo, 'utf-8')
        .then(data => {
            const arr = JSON.parse(data);

            const character = arr.filter(person => person.id == id);

            if (character) resolve(character);
            reject(new Error('id não encontrado'));
        })
        .catch(err => console.log(err));
    })

    return promise;
}
//second(1)
//    .then(result => console.log(result));

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
function third() {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(nomeArquivo, 'utf-8')
        .then(data => {
            const arr = JSON.parse(data);

            const character = arr.filter(person => (person.id != 10 && person.id != 6));

            if (character) return character;
            reject(new Error('id não encontrado'));
        })
        .then(data => {
            fs.writeFile(nomeArquivo, JSON.stringify(data),'utf-8')
        })
        .catch(err => console.log(err));
    })

    return promise;
}
//third();

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
function fourth() {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(nomeArquivo, 'utf-8')
        .then(data => {
            const arr = JSON.parse(data);

            const character = arr.filter(person => (person.id <= 4));

            if (character) return character;
            reject(new Error('id não encontrado'));
        })
        .then(data => {
            fs.writeFile('simpsonFamily.json', JSON.stringify(data),'utf-8')
        })
        .catch(err => console.log(err));
    })

    return promise;
}
// fourth();

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
function fifth() {
    const promise = new Promise((resolve, reject) => {
        fs.readFile('simpsonFamily.json', 'utf-8')
        .then(data => {
            const arr = JSON.parse(data);

            const size = arr.length;

            const newCharacter = {
                id: size + 1,
                name: 'Nelson Muntz'
            }
            
            if (newCharacter) return arr.concat(newCharacter);;
            reject(new Error('id não encontrado'));
        })
        .then(data => {
            fs.writeFile('simpsonFamily.json', JSON.stringify(data),'utf-8')
            .then(data => resolve(data))
        })
        .catch(err => console.log(err));
    })

    return promise;
}
// fifth();

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
function sixth() {
    const promise = new Promise((resolve, reject) => {
        fs.readFile('simpsonFamily.json', 'utf-8')
        .then(data => {
            const arr = JSON.parse(data);

            const newArr = arr.map(person => {
                if (person.name === "Nelson Muntz") person.name = "Maggie Simpson";
                return person;
            })

            console.log(newArr);
            
            if (newArr) return newArr;
            reject(new Error('id não encontrado'));
        })
        .then(data => {
            fs.writeFile('simpsonFamily.json', JSON.stringify(data),'utf-8')
            .then(data => resolve(data))
        })
        .catch(err => console.log(err));
    })

    return promise;
}
sixth();