const { expect } = require("chai");

const isSigned = require('../ex1');

describe('Function isSigned', () => {
    describe('When parameter isn\'t a number', () => {
        it('return "no inválido"', () => {
            const result = isSigned('sasa');

            expect(result).to.be.equal('O valor deve ser um número');
        })
    })
    describe('When parameter is valid', () => {
        it('return a string', () => {
            const result = isSigned(0);

            expect(result).to.be.a('string');
        })
    })
    describe('When number is bigger than zero ', () => {
        it('return "positivo"', () => {
            const result = isSigned(6);

            expect(result).to.be.equal('positivo');
        })
    })
    describe('When number is smaller than zero ', () => {
        it('return "negativo"', () => {
            const result = isSigned(-32);

            expect(result).to.be.equal('negativo');
        })
    })
    describe('When number is equal to zero ', () => {
        it('return "neutro"', () => {
            const result = isSigned(0);

            expect(result).to.be.equal('neutro');
        })
    })
})