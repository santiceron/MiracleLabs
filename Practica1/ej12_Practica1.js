/*Vamos a armar el juedo de ”Adivinar el número”. El juego consiste de los siguiente: La
computadora genera un número aleatorio entre 1 y 10. Luego nos pide que adivinemos el
número. Si el número que ingresamos es menor que el que genero la maquina nos muestra
el mensaje ”El número es mayor”. Si el número que ingresamos es mayor nos muestra el
mensaje ”El número es menor”. Cuando hayamos acertado el valor nos informa del fin del
juego.
• Agregue al juego anterior niveles de dificultad.*/

function adivinarElNumero(dificultad){

    switch(dificultad){
        case '1':
            let numAleatorio = Math.floor(Math.random() * 10) + 1;
            let numIngresado = prompt("Ingrese un numero del 1 al 10");

            while(numIngresado != numAleatorio){
                if(numIngresado < numAleatorio){
                    numIngresado = prompt("El número es mayor");
                } else{
                    numIngresado = prompt("El numero es menor");
                }
            }

            return console.log("Adivinaste! Fin del juego");  
        
        case '2':
            let numAleatorio2 = Math.floor(Math.random() * 100) + 1;
            let numIngresado2 = prompt("Ingrese un numero del 1 al 100");

            while(numIngresado2 != numAleatorio2){
                if(numIngresado2 < numAleatorio2){
                    numIngresado2 = prompt("El número es mayor");
                } else{
                    numIngresado2 = prompt("El numero es menor");
                }
            }

            return console.log("Adivinaste! Fin del juego");  
        
        case '3':
            let numAleatorio3 = Math.floor(Math.random() * 100) + 1;
            console.log("Tienes 6 intentos para adivinar el numero");

            let numIngresado3 = prompt("Ingrese un numero del 1 al 100 (Intento 1 de 6)");

            for(let i = 0; i < 6; i++){
                if(numIngresado3 == numAleatorio3){
                    return console.log("Adivinaste! Fin del juego");
                } else if(numIngresado3 < numAleatorio3){
                        numIngresado3 = prompt("El número es mayor");   // Intenté imprimir el numero de intento actual usando el i del for, pero con prompt no pude
                    } else{
                        numIngresado3 = prompt("El numero es menor");
                    } 
            }

            return console.log("Fin del juego! Te quedaste sin intentos");
    }      
}

function menu(){
    let opcion = prompt("¿Desea jugar? Ingrese 1 para jugar, 0 para salir");

    switch(opcion){
        case '0':
            return;
        
        case '1':
            let dificultad = prompt("Dificultad: 1 para Fácil, 2 para Media, 3 para Difícil");
            adivinarElNumero(dificultad);
    }
}

menu();