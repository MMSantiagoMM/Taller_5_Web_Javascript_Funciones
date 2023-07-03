/* Cree un conversor de temperatura, investigando la fórmula para pasar grados de Celsius a Fahrenheit y viceversa, pida al usuario la temperatura a convertir y muestra en pantalla lo siguiente: */
/*  • Si la Temperatura es menos  0°C  o 32°F : Nos congelamos 
    • Si la Temperatura es entre de 5°C a 15°C  o 33°F a 50°F : Esta haciendo frio
    • Si la Temperatura es entre de 16°C a 25°C  o 51°F a 77°F : Está templado el dia
    • Si la Temperatura es más de 26°C  o 78°F : Tiene fiebre o es el apocalipsis. */

let numero = parseFloat(prompt("Ingrese los grados a calcular"));
let grados = parseInt(prompt("Si desea hacer la conversión de celsius a fahrenheit presione digite el número 1 <br> si desea hacer la conversión de fahrenheit a celsius digite el número 2"))


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
    let info = "El numero ingresado por usted es: " + numero + "<br> el resultado de la conversión es: " + otraFuncion(grados,numero)
        if(grados == 2){
            if(otraFuncion(grados,numero) < 0){
                return info + " Nos congelamos <br>"
            }else if(otraFuncion(grados,numero) < 16){
                return info + " Está haciendo frío <br>"
            }else if (otraFuncion(grados,numero) < 25){
                return info + " Está templado el día <br>"
            }else {
                return info + " Tiene friebre o el apocalipsis <br>"
            }
        } else if(grados == 1){
            if(otraFuncion(grados,numero) < 32){
                return info + " Nos congelamos <br>"
            }else if(otraFuncion(grados,numero) < 50){
                return info + " Está haciendo frío <br>"
            }else if (otraFuncion(grados,numero) < 77){
                return info + " Está templado el día <br>"
            }else {
                return info + " Tiene friebre o el apocalipsis <br>"
            }
        }
    
}
document.write(validacion(temperatura))