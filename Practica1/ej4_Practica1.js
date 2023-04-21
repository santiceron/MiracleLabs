//Crea una función que reciba una frase como cadena y devuelva la palabra más larga:

function palabraMasLarga(frase) {

    let arr = frase.split(' ');
    let palabra = arr[0]; 
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > palabra.length){
            palabra = arr[i];
        }
    }

    return palabra;
}

console.log(palabraMasLarga('It was an early morning yesterday'));
console.assert(palabraMasLarga('It was an early morning yesterday') === 'yesterday', "Error");

/* Crea una función que reciba una cadena y lo devuelva con todas las palabras con su
primera letra mayúscula */

function primeraMayuscula(frase) {

    let arr = frase.split(' ');     
    
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    let frase2 = arr.join(" ");

    return frase2;
}

console.log(primeraMayuscula('I was up before the dawn'));
console.assert(primeraMayuscula('I was up before the dawn') === 'I Was Up Before The Dawn', "Error");