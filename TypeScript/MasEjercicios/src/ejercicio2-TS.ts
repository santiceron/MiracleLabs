/* 1. Vamos a implementar el juego de Code Breaker. El juego comienza generando un número
al azar de cuatro dígitos. Cada dígito puede tener un valor entre 0 y 6.
2. El usuario ingresa un número intentando adivina el número secreto
3. Si alguno de los números concuerda en la posición original, se muestra una X
4. Si alguno de los números no concuerda con la posición original, pero esta en el número
secreto en otra posición, muestra un -
5. El orden en que se muestran es el siguiente: XX- (primero las X y luego los -)
6. Ejemplo:
Número secreto: 2561
Primer intento: 1334
Salida: -
Segundo intento: 4251
Salida: X--
Tercer intento: 6521
Salida: XX--  */

import * as readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function randomNum():string {
    
    let code:string = "";
    let digito:number;

    for(let i = 0; i < 4; i++){       

        digito = Math.floor(Math.random() * 7);
        code += digito.toString();

    }
    
    return code;
}

function comparaIntento(code:string, intento:string){

    let salida = "";

    for(let i = 0; i < 4; i++){

        if(intento[i] === code[i]){
            salida = 'X' + salida;
        }

        for(let j = 0; j < 4; j++){

            if(i != j){                         //esta comparacion ya la hice, por eso la evito
                if(intento[i] === code[j]){
                    salida = salida + '-';
                }
            }
        }
    }

    return salida;
}

function codeBreaker(code:string){

    rl.question("Ingrese un codigo de 4 digitos, entre 0 y 6: ", (intento) => {

        if(intento == null || intento.length != 4){

            console.log("Error, ingresó un numero inválido");
            codeBreaker(code);

        } else{

            let resultado = comparaIntento(code, intento);

            if(resultado === "XXXX"){

                console.log("Descifraste el código! Fin del juego");
                rl.close();

            } else{

                console.log(resultado);
                codeBreaker(code);
            }
        }
    })

}

const code = randomNum();
console.log(code);
codeBreaker(code);