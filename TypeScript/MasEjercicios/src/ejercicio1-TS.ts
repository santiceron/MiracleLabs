/*Armar una función que reciba dos cadenas. Una de las cadenas son joyas que representan
los tipos de piedras preciosas que tenemos. La otra cadena reporesenta las piedras es un
tipo que tenemos. Quieremos saber cuántas de las piedras son también joyas.*/


function myFunction(cadena1:string, cadena2:string):number{

    let p = 0;
    cadena1 = cadena1.toUpperCase();
    cadena2 = cadena2.toUpperCase();

    let joyas: string[] = cadena1.split(" - ");
    let piedras: string[] = cadena2.split(" - ");

    for(let i = 0; i < piedras.length; i++){
        for(let j = 0; j < joyas.length; j++){

            if(piedras[i] === joyas[j]){
                p++;
            }

        }
    }

    return p;
}


console.assert(myFunction("rubi - diamante - esmeralda - zafiro", "cuarzo - esmeralda - topacio - rubi - diamante - roca volcanica") === 3);
console.assert(myFunction("zafiro", "cuarzo - esmeralda") === 0);

