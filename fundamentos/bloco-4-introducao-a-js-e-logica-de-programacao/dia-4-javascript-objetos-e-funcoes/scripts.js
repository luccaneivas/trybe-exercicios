// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
// };

//EXERCICIO 1
//console.log("Bem-vinda,", info.personagem);

//EXERCICIO 2
// info.recorrente = "Sim";
// console.log(info);

//EXERCICIO 3
// for (let key in info) {
//   console.log(key);
// }

//EXERCICIO 4
// for (let key in info){
//   console.log(info[key]);
// }

//EXERCICIO 5
// let info2 = {
//   personagem: "Tio Patinhas",
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: "O último MacPatinhas",
//   recorrente: "Sim"
// };

// console.log(info.personagem + " e " + info2.personagem);
// console.log(info.origem + " e " + info2.origem);
// console.log(info.nota + " e " + info2.nota);
// if (info.recorrente === 'Sim' && info.recorrente === 'Sim'){
//   console.log('Ambos recorrentes');
// }

//PARTE 2 FUNÇÕES - 4.4
//EXERCICIO 1
// console.log(verificaPalindrome('arara'));
// function verificaPalindrome (string) {
//   let array = string.split('');
//   let arrayTeste = (string.split('')).reverse();
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] != arrayTeste[i]) {
//       return false;
//     }
//   }
//   return true;
// }

//EXERCICIO 2
// console.log(maior([2, 3, 6, 7, 10, 1]));
// function maior(array) {
//   let maior = array[0];
//   for (const number of array) {
//     if (number >= maior){
//       maior = number;
//     }
//   }
//   let index = array.indexOf(maior);
//   return index;
// }

//EXERCICIO 3
// console.log(menor([2, 4, 6, 7, 10, 0, -3]));
// function menor(array) {
//   let menor = array[0];
//   for (const number of array) {
//     if (number <= menor) {
//       menor = number;
//     }
//   }
//   let index = array.indexOf(menor);
//   return index;
// }

//EXERCICIO 4
// console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Esquedosplato']));
// function maiorNome(array) {
//   let nome = array[0];
//   let tamanho = array[0].length;
//   for (const name of array) {
//     if (name.length >= tamanho) {
//       tamanho = name.length;
//       nome = name;
//     }
//   }
//   return nome;
// }

//EXERCICIO 5
// console.log(repeated([2, 3, 3, 3, 2, 5, 8, 2, 3]));
// function repeated(array) {
//   let numero;
//   let maiorRepeticao = 0;
//   for (const number of array) {
//     let contador = 0;
//     for (let i = 0; i < array.length; i += 1) {
//       if (number === array[i]) {
//         contador += 1;
//       }
//     }
//     if (contador >= maiorRepeticao) {
//       maiorRepeticao = contador;
//       numero = number;
//     }
//   }
//   return numero;
// }

//EXERCICIO 6
// console.log(soma(25));
// function soma(n) {
//   let soma = 0;
//   for (let i = 1; i <= n; i += 1) {
//     soma += i;
//   }
//   return soma;
// }

//EXERCICIO 7
// console.log(finalWord('joaofernando', 'fernan'));
// function finalWord(word, ending) {
//   let palavra = word.split('');
//   let final = ending.split('');
//   let contador = 0;
//   let teste = false;
//   for (let i = (palavra.length - final.length); i < palavra.length; i += 1){
//     if (palavra[i] == final[contador]) {
//       teste = true;
//     } else {
//       teste = false;
//     }
//     contador += 1;
//   }
//   return teste;
// }

//BÔNUS
// EXERCICIO 1
console.log(conversorRomano('XI'));
function conversorRomano(string) {
  const algarismosRomanos = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
  }
  let numeros = [];
  let stringTeste = '';
  for (let i = 0; i < string.length; i += 1){
    stringTeste += string[i];
    if (algarismosRomanos.hasOwnProperty(stringTeste)){
      numeros.push(stringTeste);
      stringTeste = '';
    }
  }
  let convertido = [];
  let somatoria = 0;
  for (const number of numeros) {

    convertido.push(algarismosRomanos[number]);
  }
  for (let i = 0; i < convertido.length; i += 1) {
    if (convertido[i + 1] < convertido[i]) {

    } else {
      somatoria += convertido[i];
    }
  }
  return somatoria;
}