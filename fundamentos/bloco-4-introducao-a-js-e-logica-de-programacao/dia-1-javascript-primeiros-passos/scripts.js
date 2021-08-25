//EXERCICIO 1
// const a = 10;
// const b = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

//EXERCICIO 2
// const a = 10;
// const b = 4;

// if (a > b){
//   console.log('O valor ' + a + ' é maior.');
// } else {
//   console.log('O valor ' + b + ' é maior.');
// }

//EXERCICIO 3
// const a = 10;
// const b = 42;
// const c = 12;

// if (a > b && c) {
//   console.log('O valor ' + a + ' é maior.');
// } else if (b > a && b > c) {
//   console.log('O valor ' + b + ' é maior.');
// } else {
//   console.log('O valor ' + c + ' é maior.');
// }

//EXERCICIO 4
// const num = 0;
// if (num > 0){
//   console.log('positive');
// } else if (num < 0){
//   console.log('negative');
// } else {
//   console.log('zero');
// }

//EXERCICIO 5
const lado1 = 3;
const lado2 = 1;
const lado3 = 10;
let soma = lado1 + lado2 + lado3;
let result;

if (lado1 < 0 || lado2 < 0 || lado3 < 0){
  console.log('valor inválido! (numeros devem ser positivos)');
} else if (soma < 180 || soma > 180){
  result = false;
} else {result = true;}

console.log(result);