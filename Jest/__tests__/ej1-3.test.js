const { cadenaAdn } =  require('../src/ej1-3.js');

describe('prueba de funcion cadenaAdn', () => {

    test('cadenaAdn de C', () => {
        expect(cadenaAdn('C')).toBe('C');
    });

    test('cadenaAdn de T', () => {
        expect(cadenaAdn('T')).toBe('T');
    });

    test('cadenaAdn de A', () => {
        expect(cadenaAdn('A')).toBe('A');
    });

    test('cadenaAdn de G', () => {
        expect(cadenaAdn('G')).toBe('G');
    });

    test('cadenaAdn de un numero', () => {
        expect(cadenaAdn('1')).toBe('');
    });

    test('cadenaAdn de cadena vacía', () => {
        expect(cadenaAdn('')).toBe('');
    });

    test('cadenaAdn recibe un valor nulo', () => {
        expect(() => cadenaAdn(null)).toThrowError('Se recibio un valor nulo');
    });

})