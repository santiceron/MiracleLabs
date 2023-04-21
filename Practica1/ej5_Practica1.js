//Crea una función que reciba una cadena y la devuelva en camelCase

function camelize(frase) {

    let arr = frase.split(' ');

    arr[0] = arr[0].charAt(0).toLowerCase() + arr[0].slice(1);

    for(let i = 1; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    let frase2 = arr.join('');

    return frase2;
}

console.log(camelize('No te enamores nunca de aquel marinero bengalí'));
console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');