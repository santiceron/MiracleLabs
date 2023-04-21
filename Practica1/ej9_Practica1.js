/*Escriba una función llamada addOnlyNums que pueda aceptar 
cualquier cantidad de argumentos (incluidos números o cadenas) y devuelva la suma de solo los números*/

function addOnlyNums(...args){

    let suma = 0;

    for(let i = 0; i < args.length; i++){

        if(typeof args[i] === "number"){
            suma += args[i];
        }        
    }

    return suma;
}

console.log('%d', addOnlyNums(1, 2, "El", 38, "Está cargado", 7, 10));