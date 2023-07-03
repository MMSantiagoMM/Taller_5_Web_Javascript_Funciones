/* Crea y llama una función que recibe el ancho y el alto de un rectángulo y calcula su superficie.  s = ancho * alto. */


let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo"));
let alto = parseFloat(prompt("Ingrese la altura del rectángulo"));

const superficie =(paramOne,paramTwo)=> {
    let resul = paramOne * paramTwo
    return resul
}

document.write(`La superficie del rectángulo es de: ${superficie(ancho,alto)}`)