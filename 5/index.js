/* Muestra todas las operaciones básicas(suma, resta, multi, división), pidiendo al usuario 2 números por medio de una función.  */


let numOne = parseFloat(prompt("Ingrese un primer numero"))
let numTwo = parseFloat(prompt("Ingrese un segundo numero"))

const operaciones = (num1,num2) => {
    return `Suma: ${num1 + num2} <br> Resta: ${num1-num2} <br> Multiplicación ${num1*num2} <br> División ${num1/num2}` 
}

document.write(`Los números digitados son: ${numOne} y ${numTwo} <br> ${operaciones(numOne,numTwo)}`)