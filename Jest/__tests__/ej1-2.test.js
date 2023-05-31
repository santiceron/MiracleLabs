const { bisiesto } =  require('../src/ej1-2.js');

describe ('prueba de funcion bisiesto', () => {

    test('año no bisiesto', () => {
        expect(bisiesto(1)).toBeFalsy();
    });
    
    test('divisible por 4', () => {
        expect(bisiesto(4)).toBeTruthy();
    });

    test('divisible por 100', () => {
        expect(bisiesto(100)).toBeFalsy();
    });

    test('divisible por 400', () => {
        expect(bisiesto(400)).toBeTruthy();
    });

    test('bisiesto de una cadena', () => {
        expect(() => bisiesto('a')).toThrowError('Se debe ingresar un numero');
    });
})