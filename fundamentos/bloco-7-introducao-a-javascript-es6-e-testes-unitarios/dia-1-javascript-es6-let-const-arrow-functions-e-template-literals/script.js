const testingScope = (escopo) => {
  (escopo) ?  console.log(`Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`) : console.log(`Não devo ser utilizada fora meu escopo (else)`);
}

testingScope(true);

const oddsAndEvens = (numbers) => {
  console.log(`Os números ${numbers.sort((a, b) => a - b).join(',')} se encontram ordenados em ordem crescente!`);
};
oddsAndEvens([13, 3, 4, 10, 7, 2]);