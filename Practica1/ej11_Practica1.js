//Escriba una función llamada onlyUniques que pueda tomar cualquier cantidad de argumentos y devuelva un arreglo de solo los argumentos únicos

function onlyUniques(...args){
    let arr = [];

    for(let i = 0; i < args.length; i++){
        let p = 0;
        
        for(let j = 0; j < args.length; j++){

                if(args[i] === args[j]){
                    if(i != j){
                        p = 1;
                    }
                }
        }

        if(p === 0){
            arr.push(args[i]);
        }
    }

    return arr;
}

console.log(onlyUniques(1, 3, 5, 3, 7, 7, 8, 'vaca', 'pato', 'vaca'));