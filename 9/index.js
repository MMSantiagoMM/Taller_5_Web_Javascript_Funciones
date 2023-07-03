/*      Cree una función que pida el precio de N productos y  por medio de otra función aumente el iva del 19% y diga al usuario el precio total a pagar los productos que compró y el precio de cada uno.
producto 1              = 2.500 
producto 2         	     = 4.500 
producto 3              = 2000 
subtotal                     10.000
Total A pagar   12.200 */

const productos = () => {
    let cantidad = parseInt(prompt("Cuántos productos desea ingresar"))
    let precios = []
    for(let i = 1; i <= cantidad; i++){
        precios.push(parseFloat(prompt(`Ingrese el precio del producto #${i}`))) 
    }
    return precios;
}

const iva = (element) =>{
    let aux = element
    let aux2 = 0;
    let aux3 = [];
    let aux4 = 0;
    for(let j = 0; j < element.length; j++){
        aux2 += aux[j]
        aux4 = aux2 + (aux2 * 0.19);
        aux3.push(`Producto ${j+1} = ${aux[j]} <br>`)
    } 
    return aux3 + `<br> Subtotal = ${aux2} <br> Total a pagar = ${aux4} `

    /* return `El precio del los productos es <br> ${aux} y el total general a pagar es ${aux2}` */
    
}

document.write(iva(productos()))

