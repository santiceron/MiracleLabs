//Aquí hemos inicializado dos variables con tipos de funciones. Posteriormente les asignamos funciones.
//1 Arreglar los errores

let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

capitalize = function (value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

multiply = function (x: number, y: number): number {
    return x * y;
}

console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`));

