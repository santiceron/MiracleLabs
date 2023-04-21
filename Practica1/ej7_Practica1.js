/*Escribe una función de conteo de cartas. Tendrá un parámetro card, que puede ser un número
o una cadena, y aumentará o disminuirá la variable de conteo global de acuerdo con el valor de
card. La función devolverá una cadena con el recuento actual y la cadena Bet si el recuento es
positivo, o Hold si el recuento es cero o negativo. El recuento actual y la decisión del jugador
(Bet o Hold) deben estar separados por un solo espacio */

let count = 0;

function cc(card) {

    let decision;

    switch(typeof card){
        case "string":
            if(card === 'J' || card === 'Q' || card === 'K' || card === 'A'){  // se pueden incluir las minusculas con mas condiciones 'j', 'q', etc.
                count--;
            } else{
                throw new Error("Carta invalida: " + card);
            }
            break;
        
        case "number":
            if(card < 2 || card > 10){
                throw new Error("Carta invalida: " + card);
            } else if(card <= 6){
                count++;
            } else if(card === 10){
                count--;
            }
            break;      
    }

    if(count > 0){
        decision = "Bet";
    } else{
        decision = "Hold";
    }

    return console.log('%d %s', count, decision);
}

cc(7);
cc("J");
cc(10);
cc("A");
cc(6);