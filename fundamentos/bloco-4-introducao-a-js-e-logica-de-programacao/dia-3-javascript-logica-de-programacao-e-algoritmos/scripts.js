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
if (n%2 == 1){
  
}

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