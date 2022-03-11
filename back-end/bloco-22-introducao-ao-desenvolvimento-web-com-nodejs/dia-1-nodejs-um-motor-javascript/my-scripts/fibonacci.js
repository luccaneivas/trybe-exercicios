const readline = require('readline-sync');

const n = readline.questionInt('Quantos elementos mostrar? ');

let numbers = [1, 1];
let sum = 0;
count = 1;

while (count <= n) {
    sum = numbers[0] + numbers[1];
    console.log(numbers[1]);
    numbers = [numbers[1], sum];
    count += 1;
}