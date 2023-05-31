/* Debemos escribir una función, fizzBuzz, que acepte un número y devuelva una cadena:
• si el número es divisible por 3, devuelve Fizz
• si el número es divisible por 5, devuelve Buzz
• si el número es divisible por 3 y 5, devuelve FizzBuzz
• si el número no cumple ninguna de las condiciones anteriores, devuelve el número
A medida que crea escribimos la función en fizzbuzz.js, también debemos escribir las pruebas
en index.test.js. Debemos ir creando nuestros propios casos de prueba.
Casos extremos a considerar:
• ¿Qué debería devolver fizzbuzz(0)?
• ¿Qué debería pasar si a la función se le pasa una cadena? */

function fizzBuzz (x) {

    if (typeof x !== 'number') {
        throw new Error('Se debe ingresar un numero');
    }
    
    let cadena = "";

    if(x % 3 === 0){
        cadena = cadena + "Fizz";
    }

    if(x % 5 === 0){
        cadena = cadena + "Buzz";
    }

    if(cadena === ""){
        return x.toString();
    } else{
        return cadena;
    }
}

console.assert(fizzBuzz(3) === "Fizz");
console.assert(fizzBuzz(5) === "Buzz");
console.assert(fizzBuzz(15) === "FizzBuzz");

module.exports = { fizzBuzz };