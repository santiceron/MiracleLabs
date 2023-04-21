/*Escriba una función llamada combineTwoArrays que tome dos arreglos como argumentos
y devuelva un solo arreglo que combine ambos (usando el operador ...)*/

function combineTwoArrays(arr1, arr2){
    
    let arrFinal =  [...arr1, ...arr2]; // []

    return arrFinal;
}

const frutas = ['manzana', 'naranja', 'uva', 'tomate'];
const verduras = ['pimiento', 'zapallito', 'calabaza'];

const listaVerduleria = combineTwoArrays(frutas, verduras);
console.log(listaVerduleria);