/* Cree una función que pida el nombre del usuario, y por medio de otra función imprima el nombre y un mensaje que diga Bienvenido + nombre. */

const nombre = () =>{
    let nomb = prompt("Digite su nombre")
    return nomb
}
const bienvenida = (name) =>{
    return "Bienvenido " + name
}

document.write(bienvenida(nombre()))