/*  Cree una función que pida la fecha actual y por medio de otra función calcule cuántos días y semanas faltan para terminar el año. */

const fecha = (dia,mes,annio)=>{
    dia = parseInt(prompt("Ingrese el día actual"))
    mes = parseInt(prompt("Ingrese el numero del día actual"))
    annio = parseInt(prompt("Ingrese el annio actual"))
    let dateCurrent = dia + mes + annio 

    return dateCurrent
}
document.write(fecha())


const actual = (item)=>{


}

const fechaActual = new Date();
const anioActual = fechaActual.getFullYear();
const proximoAnio = anioActual+1;
const ultimoDiaAnioActual = new Date(proximoAnio,0,0)
const diferenciaMilisegundos = ultimoDiaAnioActual - fechaActual;
const diasRestantes = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
const semanasRestantes = Math.floor(diasRestantes / 7);


console.log("Fecha actual " + fechaActual)
console.log("Anio actual " + anioActual)
console.log("Proximo anio " + proximoAnio)
console.log("Ultimo día del anio " + ultimoDiaAnioActual)
console.log("Diferencia milisegundos " + diferenciaMilisegundos)
console.log("dias restantes " + diasRestantes)
console.log("Semanas restantes " + semanasRestantes)