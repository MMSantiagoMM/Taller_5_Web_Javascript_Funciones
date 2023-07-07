/*      Cree una función que pida el precio de N productos y  por medio de otra función aumente el iva del 19% y diga al usuario el precio total a pagar los productos que compró y el precio de cada uno.
producto 1              = 2.500 
producto 2         	     = 4.500 
producto 3              = 2000 
subtotal                     10.000
Total A pagar   12.200 */

const productos =()=>{
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos"))
    let cajaProductos = [];
    for(let i = 1; i <= cantidad; i++){
        let producto = `Producto ${i}`
        let valor = parseInt(prompt(`Ingrese el precio del producto #${i}`))
        let objetoProductos = {producto,valor}
        cajaProductos.push(objetoProductos)
    }
    return cajaProductos
}

const productosConIva =(element)=>{
    let aux = " ";
    let aux2 = 0;
    element.forEach(item => {
        aux += `${item.producto}  =  ${item.valor} <br>`
        aux2 += item.valor
    });
        aux += `Subtotal = ${aux2} <br>`
        aux += `Total a pagar = ${aux2+ (aux2 * 0.19)}`
        return aux
}
document.write(productosConIva(productos()))

