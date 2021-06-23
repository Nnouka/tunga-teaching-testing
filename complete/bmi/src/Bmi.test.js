const bmi = require('./lib/bmi');
const calculateBMI = bmi.calculateBMI;

describe("Calculate BMI", function(){
    test('declares calculateBMI function', function() {
        expect(typeof calculateBMI).toBe("function");
    });
    
    xtest('returns correct bmi for mass and height values', function(){
       expect(calculateBMI(2, 2)).toBe(0.5);
       expect(calculateBMI(80, 1.72)).toBe(27.04);
    });
    
    xtest('throws exception for zero height value', function() {
        expect(() => calculateBMI(80, 0)).toThrowError(new Error("Height must be different from zero"));
    });
    
    test('throws exception for negative values', function() {
        expect(() => calculateBMI(-80, 1.2)).toThrowError(new Error("Height and Mass must be positive"));
        expect(() => calculateBMI(-80, -1.2)).toThrowError(new Error("Height and Mass must be positive"));
        expect(() => calculateBMI(80, -1.2)).toThrowError(new Error("Height and Mass must be positive"));
    });
});
