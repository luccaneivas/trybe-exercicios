let n = 7;

//EXERCICIO 1
// if (n > 1){
//   for (let i = 0; i < n; i += 1){
//     let string = '';
//     for (let u = 0; u < n; u += 1){
//       string += '*';
//     }
//     console.log(string);
//   }
// }

//EXERCICIO 2
// if (n > 1){
//   for (let i = n; i > 0; i -= 1){
//     let string = '';
//     for (let u = n; u >= i; u -= 1){
//       string += '*';
//     }
//     console.log(string);
//   }
// }

//EXERCICIO 3
// if (n > 1){
//   for (let i = n; i > 0; i -= 1){
//     let string = '';
//     for (let c = i - 1; c > 0; c -= 1){
//       string += ' ';
//     }
//     for (let u = n; u >= i; u -= 1){
//       string += '*';
//     }
//     console.log(string);
//   }
// }

//EXERCICIO 4
// if (n > 1){
//   for (let i = n; i > 0; i -= 2){
//     let string = '';
//     for (let c = i - 1; c > 0; c -= 2){
//       string += ' ';
//     }
//     for (let u = n; u >= i; u -= 1){
//       string += '*';
//     }
//     console.log(string);
//   }
// }

//BONUS 5
// if (n % 2 != 0) {
//   let start = Math.round(n/2);
//   let aux1 = start;
//   let aux2 = start;
//   for (let i = 0; i < start; i += 1) {
//     let string = '';
//     for (let j = 1; j <= aux2; j += 1){
//       if (j === aux1 || j === aux2 || i === start - 1){
//         string += '*';
//       } else {
//         string += ' ';
//       }
//     }
//     aux1 -= 1;
//     aux2 += 1;
//     console.log(string);
//   }
// }

//BONUS 6
// let prime = true;
// for (let i = 1; i <= n; i += 1){
//   if (i != 1 && i != n){
//     if (n%i == 0){
//       prime = false;
//       console.log('Divisível por ' + i + '.');
//     }
//   }
// }
// if (prime == true){
//   console.log('Sim, o número ' + n + ' é primo.');
// } else {
//   console.log('Não, o número ' + n + ' não é primo.');
// }