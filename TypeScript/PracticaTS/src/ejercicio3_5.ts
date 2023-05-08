/*  1 Añadir anotación de tipo de parámetro
    2 A pesar de que esta función no vuelve, agregue un tipo de retorno explícito */

function layEggs(quantity:number, color:string):void {
    console.log(`[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`);
}

layEggs(3, 'verdes');