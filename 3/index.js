/* por medio de una función calcula la circunferencia de un círculo por medio de la siguiente fórmula c = 2*Math.PI*Radio, también Crea y llama una función que recibe un número y calcula su cubo */

/* 
let radio = parseFloat(prompt("Ingrese el radio del círculo"))

const circunsferencia=(parametro)=>{
    return 2 * Math.PI * parametro
}

document.write(`La circunsferencia del circulo es de: ${circunsferencia(radio)}`) */

let numero = parseInt(prompt("Ingrese un numero para calcular su raíz cúbica"))

const cubica = (raiz) => {
    for (let i = 1; i <= raiz; i++) {
        for (let j = 1; j <= i; j++) {
            if (j === i) {
                for (let k = 1; k <= j; k++) {
                    if (k === j) {
                        let cubo = i * j * k
                        if (cubo === raiz) {
                            return k
                        } 
                    }
                }
            }
        }
    }
}
document.write(`La raíz cúbica de ${numero} es ${cubica(numero)}`)
