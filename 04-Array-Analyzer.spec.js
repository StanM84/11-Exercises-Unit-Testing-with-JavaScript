import { analyzeArray } from "./04-Array-Analyzer.js";
import { expect } from 'chai';

describe ("analyzeArray", () => {
    it ("should return undefined when pass non-array is input", () => {
        // Arrange
        const nonArray = "some";

        // Act
        const result = analyzeArray(nonArray);

        // Assert
        expect(result).to.be.undefined;
    })

    it ("should return undefined when pass empty array is input", () => {
        // Arrange
        const nonArray = [];

        // Act
        const result = analyzeArray(nonArray);

        // Assert
        expect(result).to.be.undefined;
    })

    it ("should return correct value when pass array with different numbers as input", () => {
        // Arrange
        const array = [3, 5, -8, 7, 1];

        // Act
        const result = analyzeArray(array);

        // Assert
        expect(result).to.deep.equal({min: -8, max: 7, length: 5});
    })

    it ("should return correct value when pass array with one number as input", () => {
        // Arrange
        const array = [3];

        // Act
        const result = analyzeArray(array);

        // Assert
        expect(result).to.deep.equal({min: 3, max: 3, length: 1});
    })

    it ("should return correct value when pass array with equal numbers as input", () => {
        // Arrange
        const array = [1, 1, 1, 1];

        // Act
        const result = analyzeArray(array);

        // Assert
        expect(result).to.deep.equal({min: 1, max: 1, length: 4});
    })
})