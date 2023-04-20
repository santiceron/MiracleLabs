/*Cada día una planta crece en metros según su velocidadCrecimiento. Cada noche, dicha
planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol.
Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta
en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento
velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva
el número de días que tardará la planta en medir la alturaDeseada.*/


function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {

    let dias = 0, noches = -1, altura = 0;

    if(velocidadCrecimiento <= velocidadDecrecimiento){
        return console.log('La velocidad de crecimiento debe ser mayor a la de decrecimiento');
    }

    if(Number.isInteger(velocidadCrecimiento) && Number.isInteger(velocidadDecrecimiento) && Number.isInteger(alturaDeseada)){
        if(velocidadCrecimiento > 0 && velocidadDecrecimiento > 0 && alturaDeseada > 0){

            while(altura < alturaDeseada){
            
                dias++;
                noches++;
            
                altura = velocidadCrecimiento*dias - velocidadDecrecimiento*noches            
            }

            return console.log('La planta tardará %d dias en crecer hasta los %d metros', dias, alturaDeseada);

        } else{
            return console.log('Los datos ingresados deben ser positivos');
        }
    } else{
        return console.log('Los datos ingresados deben ser enteros');
    }
}

calcularDiasCrecimiento(3, 1, 9);