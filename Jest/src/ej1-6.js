/* Dada una matriz de 1s y 0s, encuentre el número máximo de 1s consecutivos en esta matriz. Si
hay algún valor distinto de 1 o 0 en la matriz, es un error y devuelve -1. Los 1s y 0s pueden ser
valores de cadena o enteros, ambos son aceptables y deben considerarse equivalentes. */

function unosyCeros(matriz){

    let cont = 0, res = 0;

    if (matriz.length === 0) {
        return 0;
    }

    for(const x of matriz){

        if(x != 0 && x != 1){
            return -1;
        }
    }

    for(let i = 0; i < matriz.length; i++){

        if(matriz[i] == 1){

            cont++;
            if(cont > res){
                res = cont;
            }

        } else{
            cont = 0;
        }
    }

    return res;
}

console.assert(unosyCeros([1, 1, 1, 0, 'a', 0, 1, 1, 1, 1]) === -1);
console.assert(unosyCeros([1, 1, 1, 0, '0', 1, 0, '1', 1, 1, '1']) === 4);
console.assert(unosyCeros([]) === 0);

module.exports = { unosyCeros };