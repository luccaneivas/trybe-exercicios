/* Exercício 4
Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
Após concluir a escrita do arquivo ela deverá retornar um ok .
Descreva todos os cenários de teste utilizando describes ;
Descreva todos os testes que serão feitos utilizando its ;
Crie as asserções validando se o retorno da função possui o valor e tipo esperado. */

const { expect } = require('chai');
const writeFile = require('../ex2');

const sinon = require('sinon');
const fs = require('fs');

describe('Function writeFile', () => {
    describe('After create file', () => {
        before(() => {
            sinon.stub(fs, 'writeFile');
        });
        
        after(() => {
            fs.writeFile.restore();
        });

        it('return a string "ok"', () => {
            const result = writeFile('ex2.txt', 'A brand new world...');

            expect(result).to.be.a('string');
            expect(result).to.be.equal('ok');
        })
    })
})