//Escriba una función que pueda tomar cualquier número de argumentos y devuelva la suma de todos los argumentos

function miFuncion(...args){

    let suma = 0;

    for(let i = 0; i < args.length; i++){
        suma += args[i];
    }

    return suma;
}

console.log('%d', miFuncion(1, 2, 3, 7, 10));