const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonAttk = (dragon) => {
  const minDmg = 15;
  const { strength } = dragon;
  const dmg = Math.floor(Math.random() * (strength - minDmg + 1) + minDmg);

  return dmg;
}

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo)
const warriorAttk = (warrior) => {
  const { strength } = warrior;
  const { weaponDmg } = warrior;
  const minDmg = strength;
  const maxDmg = strength * weaponDmg;
  const dmg = Math.floor(Math.random() * ((maxDmg) - minDmg + 1) + minDmg);

  return dmg;
}

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo)
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mageAttk = (mage) => {
  let { mana } = mage;

  if (mana < 15) {
    return { dano: 'Não possui mana suficiente ;-;', mana: 0  };
  }

  const { intelligence } = mage;
  const minDmg = intelligence;
  const maxDmg = intelligence * 2;
  const dmg = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);

  return { dano: dmg, mana: 15  }
}

// PARTE 2
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
// Copie o código abaixo e inicie sua implementação:
const gameActions = {
  warriorTurn: (warriorAttk) => {
    const warriorDmg = warriorAttk(warrior);
    warrior.damage = warriorDmg;
    dragon.healthPoints -= warriorDmg;
  },
  mageTurn: (mageAttk) => {
    const { dano, mana } = mageAttk(mage);

    if (mana !== 0) {
      mage.damage = dano;
      mage.mana -= mana;
      dragon.healthPoints -= dano;
    }
  },
  dragonTurn: (dragonAttk) => {
    const dragonDmg = dragonAttk(dragon);
    dragon.damage = dragonDmg;
    mage.healthPoints -= dragonDmg;
    warrior.healthPoints -= dragonDmg;
  },
  turnResults: () => battleMembers,
};
gameActions.warriorTurn(warriorAttk);
gameActions.mageTurn(mageAttk);
gameActions.dragonTurn(dragonAttk);
console.log(gameActions.turnResults());

// 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
// 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
// 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
