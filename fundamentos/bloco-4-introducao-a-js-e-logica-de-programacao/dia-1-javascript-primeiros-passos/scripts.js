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
// const lado1 = 3;
// const lado2 = 1;
// const lado3 = 10;
// let soma = lado1 + lado2 + lado3;
// let result;

// if (lado1 < 0 || lado2 < 0 || lado3 < 0){
//   console.log('valor inválido! (numeros devem ser positivos)');
// } else if (soma < 180 || soma > 180){
//   result = false;
// } else {result = true;}

// console.log(result);

//EXERCICIO 6
// const peca = 'Bispo';

// switch (peca.toLowerCase()){
//   case 'rei':
//     console.log('Uma casa para qualquer direção.');
//     break;
//   case 'rainha':
//     console.log('Quantas casas quiser em qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Quantas casas quiser na diagonal.');
//     break;
//   case 'cavalo':
//     console.log('Duas casas em uma direção que não seja diagonal e uma para a direita ou esquerda (movimento em L).');
//   case 'torre':
//     console.log('Quantas casas quiser horizontalmente ou verticalmente.');
//   case 'peão':
//     console.log('Uma casa à frente.');
//     break;
//   default:
//     console.log('Valor inválido! Use acentuação.');
//     break;
// }

//EXERCICIO 7
// const nota = 70;

// if (nota < 0 || nota > 100){
//   console.log('Valor inválido!');
// } else if (nota >= 90){
//   console.log('A');
// } else if (nota >= 80){
//   console.log('B');
// } else if (nota >= 70){
//   console.log('C');
// } else if (nota >= 60){
//   console.log('D');
// } else if (nota >= 50){
//   console.log('E');
// } else if (nota < 50) {
//   console.log('F');
// }

//EXERCICIO 8
// const a = 3;
// const b = 127;
// const c = 345;
// let result;

// if (a%2 == 0 || b%2 == 0 || c%2 == 0){
//   result = true;
// } else {
//   result = false;
// }

// console.log(result);

//EXERCICIO 9
// const a = 4;
// const b = 128;
// const c = 346;
// let result;

// if (a%2 == 1 || b%2 == 1 || c%2 == 1){
//   result = true;
// } else {
//   result = false;
// }

// console.log(result);

//EXERCICIO 10
// const custo = 200;
// const valorvenda = 499;

// if (custo < 0 || valorvenda < 0){
//   console.log('Valor inválido! Números de entrada devem ser positivos.');
// } else {
//   let imposto = 1.2;
//   let custoTotal = custo * imposto;
//   let lucro = valorvenda - custoTotal;

//   console.log('O lucro é de ' + lucro + ' reais.');
// }

//EXERCICIO 11
// const salarioBruto = 3000;
// let salarioBase = salarioBruto;
// let inss = 0;
// let aliqir = 0;
// let parcelair = 0;
// let salarioFinal = 0;

// if (salarioBruto < 0){
//   console.log('Desculpe, valor inválido!');
// } else if(salarioBruto <= 1556.94){
//   inss = (8 * salarioBruto)/100;
// } else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
//   inss = (9 * salarioBruto)/100;
// } else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
//   inss = (11 * salarioBruto)/100;
// } else if(salarioBruto > 5189.82){
//   inss = 570.88;
// }

// salarioBase -= inss;

// if (salarioBase < 1903.98){
//   console.log("O salário é de " + salarioBase + ".");
// } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
//   aliqir = 7.5;
//   parcelair = 142.80;
//   console.log("O salário é de " + (salarioBase - ((aliqir * salarioBase)/100 - parcelair)) + ".");
// } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
//   aliqir = 15;
//   parcelair = 354.80;
//   console.log("O salário é de " + (salarioBase - ((aliqir * salarioBase)/100 - parcelair)) + ".");
// }
// else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
//   aliqir = 22.5;
//   parcelair = 636.13;
//   console.log("O salário é de " + (salarioBase - ((aliqir * salarioBase)/100 - parcelair)) + ".");
// }
// else if (salarioBase > 4664.68){
//   aliqir = 27.5;
//   parcelair = 869.36;
//   console.log("O salário é de " + (salarioBase - ((aliqir * salarioBase)/100 - parcelair)) + ".");
// }