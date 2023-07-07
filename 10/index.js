/*  Cree una función que pida la fecha actual y por medio de otra función calcule cuántos días y semanas faltan para terminar el año. */
let Texto = document.getElementById("texto")
let Fecha = document.getElementById("fecha")
const Calc = document.getElementById("calc")


Calc.addEventListener("click", () => {
    let texto = Texto;
    let fecha = Fecha.value;
    console.log(fecha)

    let calcularFecha = (element) => {
        let fechaActual = new Date();
        let milisegundos = (1000 * 60 * 60 * 24);
        let fechaIngresada = new Date(element)
        let resultado = (fechaIngresada - fechaActual) / milisegundos
        return Math.ceil(resultado)
    }

    if (calcularFecha(fecha) < 0)
        texto.textContent = "Fecha inválida"
    else
        texto.innerHTML += "Faltan " + calcularFecha(fecha) + " días para la fecha seleccionada" + "<br>";
    
    let calcularSemanas=(element)=>{
        return Math.floor(element/7)
    }
    texto.innerText += "Faltan " + calcularSemanas(calcularFecha(fecha)) + " Semanas para la fecha seleccionada"


})