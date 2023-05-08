/*Actualmente, nuestra función ‘pushToCollection‘ acepta *cualquier* elemento y lo agrega, (indiscriminadamente) a *cualquier* tipo de matriz.
Un par de problemas con esto:
1 El tipo ‘any‘ hace que perdamos toda la información de tipos en nuestros parámetros.
2 Esta holgura se ha vuelto en nuestra contra durante el tiempo de ejecución (mira a ‘incrementByTwo‘)

1 Implementar ‘pushToCollection‘ como una función genérica. (Esto debería crear errores
en tiempo de compilación en lugares donde se agregan valores incorrectos a una colección
determinada. Fije estos valores a los tipos correctos)
2 Una vez hecho genérico, ‘pushToCollection‘ debe ser suficientemente *generic* para operar
en artículos y colecciones de cualquier tipo mientras se continúa aplicando que conicidan */

const numberCollection: number[] = [];
const stringCollection: string[] = [];

function pushToCollection<T>(item:T, collection:T[]):T[] {
    collection.push(item);
    return collection;
}

// Anadir algunas cosas a las colecciones
pushToCollection<string>('false', stringCollection);
pushToCollection<string>('hi', stringCollection);
pushToCollection<string>('[]', stringCollection);

pushToCollection(1, numberCollection);
pushToCollection(2, numberCollection);
pushToCollection(3, numberCollection);

const incrementedByTwo = numberCollection.map((num) => num + 2);

console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);