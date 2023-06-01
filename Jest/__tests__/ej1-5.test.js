const { encuentraLetra } =  require('../src/ej1-5.js');

describe('pruebas de funcion encuentraLetra', () => {

    test('Se le pasa cadena vacia', () => {
        expect(encuentraLetra("")).toBe(-1);
    });

    test('Se le pasa cadena sin letras repetidas consecutivamente', () => {
        expect(encuentraLetra("abcd")).toBe(-1);
    });

    test('Se le pasan numbers', () => {
        expect(encuentraLetra(123)).toBe(-1);
    });

    test('Se le pasan solo espacios', () => {
        expect(encuentraLetra("   ")).toBe(-1);
    });

    test('Se le pasa un null', () => {
        expect(() => encuentraLetra(null)).toThrowError('Debe ingresar un string o un number');
    });    
})