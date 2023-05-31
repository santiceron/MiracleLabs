const { fizzBuzz } =  require('../src/ej1-1.js');

describe ('prueba de funcion fizzBuzz', () => {

    test('fizz', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    test('buzz', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    test('fizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    test('fizzBuzz de cero', () => {
        expect(fizzBuzz(0)).toBe('FizzBuzz');
    })

    test('fizzBuzz de una cadena', () => {
        expect(() => fizzBuzz('a')).toThrowError('Se debe ingresar un numero');
    });
})