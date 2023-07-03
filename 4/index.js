/* Crea una función donde pases como parámetro un nombre y muéstralo en el navegador; Validar que el dato ingresado no sea un número, de ser así se debe decir en pantalla ingrese un nombre válido. (lo puedes hacer con la función isNaN(), investiga cómo funciona) */

let nombre = prompt("Ingrese un nombre");

const validacion = (name) => {
    if (isNaN(name)) {
        return "válido"
    } else {
        return "inválido. Vuelve a intentarlo!"
    }
}
document.write(`${nombre} es un nombre ${validacion(nombre)}`)