/* Escriba una función que tome una arreglo y devuelva la suma de todos los números positivos
del arreglo. Los valores que se pueden convertir en números deben convertirse e incluirse en la
suma si son positivos. Si la matriz está vacía, devuelve cero. */

function sumaArr(miArr){

    if(miArr.length === 0){
        return 0;
    }

    for (let i = 0; i < miArr.length; i++) {

        miArr[i] = Number(miArr[i]);

        if(isNaN(miArr[i]) || miArr[i] < 0){

            miArr.splice(i, 1);
            i--;
        }        
    }

    let suma = miArr.reduce(function(acum, x) {
        return acum + x;
    }, 0);

    return suma;
}

console.assert(sumaArr([1, 3, '-4', '7', '9', 'a']) === 20);
console.assert(sumaArr([]) === 0);

console.log(sumaArr([1, 2, 3, 1.123]));

module.exports = { sumaArr };