/* 1 Añadir anotaciones de tipo (‘any‘ excluido)
2 Inspeccione el tipo de ‘element‘ en diferentes ramas de código
3 Bonificación: convertir ‘flatten‘ en una función genérica */

const numbers:(number | number[])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
const myArray:(any | any[])[] = [['Fui', 'a', 'comprar'], 3, 'naranjas', 'y', 2,25, 'tomates'];

function flatten(array:(number | number[])[]):number[] {
    const flattened:number[] = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            element; // any[] 
            flattened.push(...element);
        } else {
            element; // any
            flattened.push(element);
        }
    }

    return flattened;
}

function flatten2(array:(any | any[])[]):any[] {
    const flattened:any[] = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            element; // any[] 
            flattened.push(...element);
        } else {
            element; // any
            flattened.push(element);
        }
    }

    return flattened;
}

const flattenedNumbers:number[] = flatten(numbers);

console.log('[Ejercicio 2.3]', flattenedNumbers);

const flattenedArray:any[] = flatten2(myArray);

console.log('Función genérica: ', flattenedArray);