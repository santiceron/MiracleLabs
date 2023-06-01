/* Escriba una función que tome una cadena de ADN (por ejemplo, ’CTAGGGTA’) y devuelva
una nueva cadena con cualquier valor base de ADN no canónico eliminado. Los valores base
canónicos son caracteres únicos: ’C’, ’T’, ’A’ y ’G’ únicamente. Haga que la función distinga
entre mayúsculas y minúsculas, lo que significa que ’c’ (minúsculas) debe eliminarse de la cadena, pero ’C’ (mayúsculas) es correcto y debe permanecer. Si la cadena de ADN está vacía,
simplemente devuelva una cadena vacía. */

function cadenaAdn(adn){

    if(adn === null){
        throw new Error('Se recibio un valor nulo');
    }

    let adnArr = adn.split("");

    for(let i = 0; i < adnArr.length; i++){

        if( adnArr[i] === 'C' || adnArr[i] === 'T' || adnArr[i] === 'A' || adnArr[i] === 'G' ){
            continue;
        }

        adnArr.splice(i, 1);
        i--;
    }

    adn = adnArr.join("");

    return adn;
}

console.assert(cadenaAdn("CxTt123pAiGGcCTAG") === "CTAGGCTAG");

module.exports = { cadenaAdn };