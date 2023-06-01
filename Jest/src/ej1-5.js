/* Dada una cadena, encuentre el primer carácter que se repite consecutivamente en ella y devuelva
su índice. Si no hay caracteres repetidos, devuelve -1. Esta función debe ignorar cualquier
espacio y no debe distinguir entre mayúsculas y minúsculas: trate ’a’ como equivalente a ’A’. */

function encuentraLetra(cadena){

    let x = -1;

    if(typeof cadena !== "string"){
        if(typeof cadena === "number"){
            cadena = cadena.toString();
        } else{
            throw new Error("Debe ingresar un string o un number");
        }
    } else {
        cadena = cadena.toLowerCase();
    }    

    for(let i = 0; i < cadena.length; i++){

        if(cadena[i] === " "){
            continue;
        } else if(cadena[i] === cadena[i + 1]){
                x = i;
                break;
        }
    }
    
    return x;
}

console.assert(encuentraLetra("Hola 22 Como Va") === 5);
console.assert(encuentraLetra(123345) === 2);

module.exports = { encuentraLetra };