//Escribe una función recursiva sum(arr, n) que retorne la suma de los primeros n elementos del arreglo arr

let res = 0, i = 0;

function sum(arr, n) { 

    if(n === 0){
        return console.log('Resultado = %i', res);        
    } else{
        res = res + arr[i];
        i++;
        sum(arr, n-1);
    }
}

const arr1 = [1, 2, 3, 4, 5, 6];

sum(arr1, 3);