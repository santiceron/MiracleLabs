/* Vamos a crear un juego de cartas en el cual cada jugador saca una carta del mazo y el que
obtiene el número más alto gana.
1. Tener en cuenta que al sacar una carta del mazo, no puede salir la misma carta, por lo
menos mientras se este utilizando ese mazo
2. Las cartas que saca cada jugador deben salir en orden aleatorio */

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

class Carta{

    constructor(public nombre: string, public palo: string, public valor: number) { }

};

function crearMazo(){

    let mazo:Carta[] = [];
    const palos = ["Picas", "Treboles", "Corazones", "Diamantes"];
    const nombres = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 13; j++){

                let nuevaCarta = new Carta(nombres[j], palos[i], (j + 2)); 
                mazo.push(nuevaCarta);
        }
    }

    return mazo;
}

function partida(mazo:Carta[]){    

    rl.question("Presiona 0 para repartir, o cualquier otra tecla para dejar de jugar: ", (opcion) => {

        if(opcion == '0'){

            let i = Math.floor(Math.random() * mazo.length);
            let carta1 = mazo[i];
            mazo.splice(i, 1);

            let j = Math.floor(Math.random() * mazo.length);
            let carta2 = mazo[j];
            mazo.splice(j, 1);

            console.log("Jugador 1: %s de %s", carta1.nombre, carta1.palo);
            console.log("Jugador 2: %s de %s", carta2.nombre, carta2.palo);

            if(carta1.valor > carta2.valor){
                console.log("Ganó el Jugador 1!");                
            } else if(carta2.valor > carta1.valor){
                console.log("Ganó el Jugador 2!");   
            } else{
                console.log("Empate!");
            }

            partida(mazo);

        } else{
            console.log("Adios!");
            rl.close();
        }
    })
}


function menu(){

    rl.question("Juego de Cartas: ingresa 0 para jugar, cualquier otra tecla para salir: ", (opcion) => {

        if(opcion == '0'){
            console.log("Comienza el juego! \n\n");
            let mazo = crearMazo();
            partida(mazo);
        } else{
            console.log("Adios!");
            rl.close();
        }
    })
}

menu();