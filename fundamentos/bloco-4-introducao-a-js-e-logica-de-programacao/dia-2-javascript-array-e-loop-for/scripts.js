let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

//EXERCICIO 1
// for (let number of numbers) {
//   console.log(number);
// }

//EXERCICIO 2
// for (let i = 0; i < numbers.length; i += 1){
//   sum += numbers[i];
//   console.log(sum);
// }


//EXERCICIO 3
// for (let i = 0; i < numbers.length; i += 1) {
//   sum += numbers[i];
// }
// console.log(sum/numbers.length);

//EXERCICIO 4
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
if (sum/numbers.length > 20){
  console.log('Valor maior que 20.');
}else {
  console.log('Valor menor ou igual a 20.');
}