/* Cree un conversor de temperatura, investigando la fórmula para pasar grados de Celsius a Fahrenheit y viceversa, pida al usuario la temperatura a convertir y muestra en pantalla lo siguiente: */
/*  • Si la Temperatura es menos  0°C  o 32°F : Nos congelamos 
    • Si la Temperatura es entre de 5°C a 15°C  o 33°F a 50°F : Esta haciendo frio
    • Si la Temperatura es entre de 16°C a 25°C  o 51°F a 77°F : Está templado el dia
    • Si la Temperatura es más de 26°C  o 78°F : Tiene fiebre o es el apocalipsis. */

let numero = parseFloat(prompt("Ingrese los grados a calcular"));
let grados = parseInt(prompt("- Si desea hacer la conversión de celsius a fahrenheit presione digite el número 1 \n - Si desea hacer la conversión de fahrenheit a celsius digite el número 2"))


const temperatura = (param1, param2) => {
    if (param1 == 1) {
        return param2 * 1.8 + 32 
    } else if (param1 == 2) {
        return (param2 - 32) / 1.8
    } else {
        return "opción inválida"
    }
}

const validacion = (otraFuncion) => {
    let info = "El numero ingresado por usted es: " + numero + "<br> el resultado de la conversión es: " + otraFuncion
        if(grados == 2){
            if(otraFuncion < 0){
                return info + ` °Celsius Nos congelamos <br>`
            }else if(otraFuncion < 16){
                return info + ` °Celsius Está haciendo frío <br>`
            }else if (otraFuncion < 25){
                return info + ` °Celsius Está templado el día <br>`
            }else {
                return info + ` °Celsius Tiene friebre o el apocalipsis <br>`
            }
        } else if(grados == 1){
            if(otraFuncion < 32){
                return info + ` °Fahrenheit Nos congelamos <br>`
            }else if(otraFuncion < 50){
                return info + ` °Fahrenheit Está haciendo frío <br>`
            }else if (otraFuncion  < 77){
                return info + ` °Fahrenheit Está templado el día <br>`
            }else {
                return info + ` °Fahrenheit Tiene friebre o el apocalipsis <br>`
            }
        }
    
}
document.write(validacion(temperatura(grados,numero)))