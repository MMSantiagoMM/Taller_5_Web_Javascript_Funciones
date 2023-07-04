/*     11. Cree un listado de compras, con función que pida el número de productos, nombre y valor del producto por medio de otra función imprima la información digitadas.
1 -  arroz $ 2.500 x 3 = 7.500
2 - aceite $ 4.500 x 1 = 4.500
3 - azúcar $ 2000 x 2 = 4.000
—-----------------------------------
        Total Mercado    16.000 */


const funProductos = () => {
  let registro = prompt("Desea ingresar un producto? si/no")
  let cajaProductos = []
  while(registro !== "no"){
    let nombre = prompt("Ingrese le nombre del producto")
    let cantidad = parseInt(prompt("Cuantos de estos productos desea llevar?"))
    let precio = parseInt(prompt("Ingrese el precio del producto"))
    let producto = {nombre,cantidad,precio}
    cajaProductos.push(producto)
    registro = prompt("Desea ingresar un producto? si/no")
  }
  return cajaProductos
}

const informacion=(element)=>{
  let aux = ""
  let aux2=0;
  element.forEach((item,ind)=>{
    aux += `${ind + 1} - ${item.nombre}   $ ${item.precio} x ${item.cantidad} = ${item.precio * item.cantidad} <br>` 
    aux2 += (item.precio * item.cantidad)
  });
  aux += `----------------------------- <br>`
  aux += `Total mercado = ${aux2}`
  return aux;
}

document.write(informacion(funProductos()))