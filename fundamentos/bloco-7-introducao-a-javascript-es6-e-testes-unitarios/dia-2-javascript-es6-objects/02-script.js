const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addKey = (obj, key, value) => {
  obj[key] = value;
}
addKey(lesson2, 'turno', 'noite');

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const objKeys = obj => Object.keys(obj);

// 3 - Crie uma função para mostrar o tamanho de um objeto.
const objSize = obj => objKeys(obj).length;

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const objValues = obj => Object.values(obj);

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const allStudents = (lessons) => {
  let array = objKeys(lessons);
  let total = 0;
  for (lesson in array) {
    total += lessons[array[lesson]].numeroEstudantes;
  }
  return total;
}
// console.log(allStudents(allLessons));

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (obj, position) => objValues(obj)[position];
// console.log(getValueByNumber(lesson1, 0));

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyPair = (obj, key, value) => {
  let array = [key, value];
  console.log(array);
  console.log(Object.entries(obj));
  return Object.entries(obj).includes();
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false