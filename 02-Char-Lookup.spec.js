import { lookupChar } from "./02-Char-Lookup.js"
import { expect } from "chai"

describe ("lookupChar", () => {
    it ("should return undefined when first parameter is from incorrect and second parameter is correct", () => {
        // Arrange
        const incorrectFirstParam = 123;
        const correctSecondParam = 1;

        // Act
        const result = lookupChar(incorrectFirstParam, correctSecondParam);

        // Assert
        expect(result).to.be.undefined;
    })

    it ("should return undefined when first parameter is from correct and second parameter is incorrect", () => {
        // Arrange
        const correctFirstParam = "abc";
        const incorrectSecondParam = "1";

        // Act
        const result = lookupChar(correctFirstParam, incorrectSecondParam);

        // Assert
        expect(result).to.be.undefined;
    })

    it ("should return undefined when first parameter is from incorect and second parameter is correct float type", () => {
        // Arrange
        const correctFirstParam = "123";
        const incorrectFloatSecondParam = 10.01;

        // Act
        const result = lookupChar(correctFirstParam, incorrectFloatSecondParam);

        // Assert
        expect(result).to.be.undefined;
    })

    it ("should return undefined when first parameter is from correct type and second parameter is bigger than the string legth", () => {
        // Arrange
        const correctFirstParam = "123";
        const biggerSecondParam = 5;

        // Act
        const result = lookupChar(correctFirstParam, biggerSecondParam);

        // Assert
        expect(result).to.be.equal("Incorrect index");
    })

    it ("should return undefined when first parameter is from correct type and second parameter is lower than the string legth", () => {
        // Arrange
        const correctFirstParam = "123";
        const lowerSecondParam = -5;

        // Act
        const result = lookupChar(correctFirstParam, lowerSecondParam);

        // Assert
        expect(result).to.be.equal("Incorrect index");
    })

    it ("should return correct result when first parameter is from correct type and second parameter is parameter is correct", () => {
        // Arrange
        const correctFirstParam = "stan";
        const correctSecondParam = 1;

        // Act
        const result = lookupChar(correctFirstParam, correctSecondParam);

        // Assert
        expect(result).to.be.equal("t");
    })
})