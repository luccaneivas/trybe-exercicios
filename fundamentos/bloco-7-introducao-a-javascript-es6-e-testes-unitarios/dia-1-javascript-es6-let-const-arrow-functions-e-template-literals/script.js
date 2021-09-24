// EXERCICIOS DA AULA ---------------------------------------------
// const testingScope = (escopo) => {
//   (escopo) ?  console.log(`Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`) : console.log(`Não devo ser utilizada fora meu escopo (else)`);
// }
// testingScope(true);

// const oddsAndEvens = (numbers) => {
//   console.log(`Os números ${numbers.sort((a, b) => a - b).join(',')} se encontram ordenados em ordem crescente!`);
// };
// oddsAndEvens([13, 3, 4, 10, 7, 2]);

// EXERCICIO 1 ---------------------------------------------
// const fatorial = num => (num > 0) ? (num * fatorial(num-1)) : 1;
// console.log(fatorial(6));

// EXERCICIO 2 ---------------------------------------------
// const longestWord = word => {
//   let big = '';
//   word.split(' ').forEach(word => {
//     if (word.length > big.length) {
//       big = word;
//     }
//   });
//   return big;
// }
// console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// EXERCICIO 3 (DO HTML) ---------------------------------------------
// const btn = document.getElementById('click');
// const lbl = document.getElementById('counter');
// const clickCount = _ => lbl.innerText = `${parseInt((lbl.innerText)) + 1}`;
// btn.addEventListener('click', clickCount);

// EXERCICIO 4 -------------------------------------------------------
// const changeX = word => 'Tryber x aqui!!!!'.replace('x', word);
// const mySkills = ['HTML', 'CSS', 'JavaScript', 'Git', 'SoftSkills'];
// const concat = (tryber, skills) => `${tryber} Minhas cinco principais habilidades são:
// - ${skills.join(`
// - `)} 
// #goTrybe`;
// console.log(concat(changeX('Luquinha'), mySkills));