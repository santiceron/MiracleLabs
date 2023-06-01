const { sumaArr } =  require('../src/ej1-4.js');

describe('prueba de funcion sumaArr', () => {

    test('suma de matriz vacía', () => {
        expect(sumaArr([])).toBe(0);
    });

    test('suma de matriz con caracteres no numericos', () => {
        expect(sumaArr(['a', 'b', 'c'])).toBe(0);
    });

    test('suma de matriz con caracteres numericos', () => {
        expect(sumaArr(['1', '2', '3'])).toBe(6);
    });

    test('suma de matriz con numbers', () => {
        expect(sumaArr([1, 2, 3])).toBe(6);
    });

    test('suma de matriz con multiples tipos de datos', () => {
        expect(sumaArr([1, '2', 'a', 1.123])).toBe(4.123);
    });

})