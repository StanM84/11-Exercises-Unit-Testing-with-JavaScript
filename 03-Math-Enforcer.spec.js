import { mathEnforcer } from "./03-Math-Enforcer.js"
import { expect } from "chai"

describe("mathEnforcer", () => {
    describe("addFive", () => {
        it ("should return undefinet when pass string as input", () => {
            // Arrange
            const inputString = "some";

            // Act
            const result = mathEnforcer.addFive(inputString);

            // Assert
            expect(result).to.be.undefined;
        })

        it ("should return undefinet when pass undefined as input", () => {
            // Arrange
            const inputUndefined = undefined;

            // Act
            const result = mathEnforcer.addFive(inputUndefined);

            // Assert
            expect(result).to.be.undefined;
        })

        it ("should return undefinet when pass number as string as input", () => {
            // Arrange
            const inputNumberString = "5";

            // Act
            const result = mathEnforcer.addFive(inputNumberString);

            // Assert
            expect(result).to.be.undefined;
        })

        it ("should return correct result when pass floating number as input", () => {
            // Arrange
            const floatInput = 1.01;

            // Act
            const result = mathEnforcer.addFive(floatInput);

            // Assert
            expect(result).to.be.closeTo(6.01, 0.01);
        })

        it ("should return correct result when pass floating number as input", () => {
            // Arrange
            const floatInput = 1.01;

            // Act
            const result = mathEnforcer.addFive(floatInput);

            // Assert
            expect(result).to.be.equal(6.01);
        })

        it ("should return correct result when pass floating number as input with 'CloseTo'", () => {
            // Arrange
            const floatInput = 1.0000001;

            // Act
            const result = mathEnforcer.addFive(floatInput);

            // Assert
            expect(result).to.be.closeTo(6.01, 0.01);
        })

        it ("should return correct result when pass number as input", () => {
            // Arrange
            const input = 5;

            // Act
            const result = mathEnforcer.addFive(input);

            // Assert
            expect(result).to.be.equal(10);
        })

        it ("should return correct result when pass negative number as input", () => {
            // Arrange
            const negativeInput = -25;

            // Act
            const result = mathEnforcer.addFive(negativeInput);

            // Assert
            expect(result).to.be.equal(-20);
        })

        it ("should return correct result when pass negative number as input", () => {
            // Arrange
            const negativeInput = -5;

            // Act
            const result = mathEnforcer.addFive(negativeInput);

            // Assert
            expect(result).to.be.equal(0);
        })
    })

    describe("subtractTen", () => {
        it ("should return undefinet when pass string as input", () => {
            // Arrange
            const inputString = "some";

            // Act
            const result = mathEnforcer.subtractTen(inputString);

            // Assert
            expect(result).to.be.undefined;
        })

        it ("should return undefinet when pass undefined as input", () => {
            // Arrange
            const inputUndefined = undefined;

            // Act
            const result = mathEnforcer.subtractTen(inputUndefined);

            // Assert
            expect(result).to.be.undefined;
        })

        it ("should return undefinet when pass number as string as input", () => {
            // Arrange
            const inputNumberString = "10";

            // Act
            const result = mathEnforcer.subtractTen(inputNumberString);

            // Assert
            expect(result).to.be.undefined;
        })

        it ("should return correct result when pass floating number as input", () => {
            // Arrange
            const floatInput = 1.01;

            // Act
            const result = mathEnforcer.subtractTen(floatInput);

            // Assert
            expect(result).to.be.closeTo(-8.99, 0.01);
        })

        it ("should return correct result when pass floating number as input", () => {
            // Arrange
            const floatInput = 1.01;

            // Act
            const result = mathEnforcer.subtractTen(floatInput);

            // Assert
            expect(result).to.be.equal(-8.99);
        })

        it ("should return correct result when pass floating number as input with 'CloseTo'", () => {
            // Arrange
            const floatInput = 20.0000001;

            // Act
            const result = mathEnforcer.subtractTen(floatInput);

            // Assert
            expect(result).to.be.closeTo(10.01, 0.01);
        })

        it ("should return correct result when pass number as input", () => {
            // Arrange
            const input = 20;

            // Act
            const result = mathEnforcer.subtractTen(input);

            // Assert
            expect(result).to.be.equal(10);
        })

        it ("should return correct result when pass negative number as input", () => {
            // Arrange
            const negativeInput = -20;

            // Act
            const result = mathEnforcer.subtractTen(negativeInput);

            // Assert
            expect(result).to.be.equal(-30);
        })

        it ("should return correct result when pass negative number as input", () => {
            // Arrange
            const negativeInput = 10;

            // Act
            const result = mathEnforcer.subtractTen(negativeInput);

            // Assert
            expect(result).to.be.equal(0);
        })
    })

    describe("sum", () => {
        it ("should return undefined when Param1: incorrect and Param2: correct", () => {
            // Arrange
            const incorrectParam1 = "some";
            const correctParam2 = 10;

            // Act
            const result = mathEnforcer.sum(incorrectParam1, correctParam2);

            // Assert
            expect(result).to.be.undefined;
        })

        it ("should return undefined when Param1: correct and Param2: incorrect", () => {
            // Arrange
            const correctParam1 = 10;
            const incorrectParam2 = "some";

            // Act
            const result = mathEnforcer.sum(correctParam1, incorrectParam2);

            // Assert
            expect(result).to.be.undefined;
        })

        it ("should return undefined when Param1: string and Param2: correct", () => {
            // Arrange
            const stringParam1 = "10";
            const correctParam2 = 10;

            // Act
            const result = mathEnforcer.sum(stringParam1, correctParam2);

            // Assert
            expect(result).to.be.undefined;
        })

        it ("should return undefined when Param1: correct and Param2: string", () => {
            // Arrange
            const correctParam1 = 10;
            const stringParam2 = "10";

            // Act
            const result = mathEnforcer.sum(correctParam1, stringParam2);

            // Assert
            expect(result).to.be.undefined;
        })

        it ("should return undefined when Param1: correct and Param2: correct", () => {
            // Arrange
            const correctParam1 = 10;
            const correctParam2 = 10;

            // Act
            const result = mathEnforcer.sum(correctParam1, correctParam2);

            // Assert
            expect(result).to.be.equal(20);
        })

        it ("should return undefined when Param1: negative and Param2: negative", () => {
            // Arrange
            const negativeParam1 = -10;
            const negativeParam2 = -10;

            // Act
            const result = mathEnforcer.sum(negativeParam1, negativeParam2);

            // Assert
            expect(result).to.be.equal(-20);
        })

        it ("should return undefined when Param1: positive and Param2: negative", () => {
            // Arrange
            const positiveParam1 = 10;
            const negativeParam2 = -10;

            // Act
            const result = mathEnforcer.sum(positiveParam1, negativeParam2);

            // Assert
            expect(result).to.be.equal(0);
        })

        it ("should return undefined when Param1: float number and Param2: float number", () => {
            // Arrange
            const floatParam1 = 5.05;
            const floatParam2 = 2.5;

            // Act
            const result = mathEnforcer.sum(floatParam1, floatParam2);

            // Assert
            expect(result).to.be.equal(7.55);
        })

        it ("should return undefined when Param1: float number and Param2: number", () => {
            // Arrange
            const floatParam1 = 5.01;
            const floatParam2 = 2;

            // Act
            const result = mathEnforcer.sum(floatParam1, floatParam2);

            // Assert
            expect(result).to.be.closeTo(7.01, 0.1);
        })
    })
})