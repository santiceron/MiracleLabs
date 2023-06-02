const { unosyCeros } =  require('../src/ej1-6.js');

describe('pruebas de funcion unosyCeros', () => {

    test('Se le pasa matriz vacia', () => {
        expect(unosyCeros([])).toBe(0);
    });

    test('Se le pasa matriz con ceros numericos', () => {
        expect(unosyCeros([0, 0, 0])).toBe(0);
    });

    test('Se le pasan matriz con ceros valor de cadena', () => {
        expect(unosyCeros(['0', '0', '0'])).toBe(0);
    });

    test('Se le pasan solo unos numericos', () => {
        expect(unosyCeros([1, 1, 1])).toBe(3);
    });

    test('Se le pasan solo unos valor de cadena', () => {
        expect(unosyCeros(['1', '1', '1'])).toBe(3);
    });

    test('Se le pasan unos y ceros numericos', () => {
        expect(unosyCeros([1, 1, 0])).toBe(2);
    });

    test('Se le pasan unos y ceros valor de cadena', () => {
        expect(unosyCeros(['1', '1', '0'])).toBe(2);
    });

    test('Se le pasan unos y ceros numericos y de cadena', () => {
        expect(unosyCeros(['1', 1, 0])).toBe(2);
    });

    test('Se le pasa un numero distinto de cero y uno', () => {
        expect(unosyCeros([2])).toBe(-1);
    });    

    test('Se le pasa un caracter', () => {
        expect(unosyCeros(['a'])).toBe(-1);
    }); 
})