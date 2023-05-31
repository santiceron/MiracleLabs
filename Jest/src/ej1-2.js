/* Escriba una función que tome un año y devuelva un valor booleano que indique si el año es un
año bisiesto.
Tener en cuenta que:
• Los años que son divisibles por 4 son años bisiestos
• Los años que son divisibles por 100 no son años bisiestos
• Los años que son divisibles por 400 son años bisiestos */

function bisiesto(año){

    if (typeof año !== 'number') {
        throw new Error('Se debe ingresar un numero');
    }
    
    return (año % 400 === 0) ? true :
           (año % 100 === 0) ? false :
           año % 4 === 0;
}

console.assert(bisiesto(2000) === true);
console.assert(bisiesto(2003) === false);
console.assert(bisiesto(2100) === false);

module.exports = { bisiesto };