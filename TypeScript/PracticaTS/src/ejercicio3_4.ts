/*  1 Añadir tipos explícitos a los parámetros y tipo de retorno
    2 Añadir un saludo predeterminado: ”hola” */

function greet(greeting:string):string {
    return greeting.toUpperCase();
}

const defaultGreeting = greet("Hola");
const portugueseGreeting = greet('Oi como vai!');

console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);
