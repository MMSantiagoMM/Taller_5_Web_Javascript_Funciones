/* Crea y llama las funciones necesarias para recibir la velocidad en Kilómetros y mostrarlas en metros y millas. */

let velocidad = parseFloat(prompt("Ingrese la velocidad en KM"));
let opcion = prompt("Desea el resultado en metros o millas?")
const resultado=(parametro)=>{
    if(opcion == "metros"){
        return parametro * 1000;

    } else if(opcion == "millas"){
        return parametro * 0.6213712
    }else{
        return "escogió una opción no valida"
    }
}

document.write(`Usted digitó ${velocidad} Kilometros <br> El valor de esto en ${opcion} es de ${resultado(velocidad)} `)