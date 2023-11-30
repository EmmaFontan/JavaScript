///METODOS DE EARRAYS

///INSERTAR ELEMENTOS

///PUSH
///Inserta un elemento al final del array
/* 
const fila = ['Pepe', 'Marta', 'Cristian', 'Veronica'];
console.log(fila);
let nombre = prompt('Ingrese su nombre');
fila.push(nombre);
console.log(fila); */

///UNSHIFT
///Inserta un elemento al PRINCIPIO del array

/* const fila2 = ['Pablo', 'Juan','Cristian'];
fila2.unshift('Jimeno');
console.log(fila2); */

///QUITAR ELEMENTOS

///POP
///Quita un elemento del FINAL del array y me lo devuelve
/* const fila3 = ['Pablo', 'Juan','Cristian'];
let datoQuitado = fila3.pop();
console.log(datoQuitado); */


///SHIFT
///Quita un elemento del PRINCIPIO del array y me lo devuelve
/* const fila4  = ['Pablo', 'Juan','Cristian'];
let datoQuitado = fila4.shift();
console.log(datoQuitado);
 */


///SPLICE
///Quita de 1 a N elementos desde la posicion indicada
/// Splice(POSICION,CANTIDAD)

const productos = ['Pan', 'Queso', 'Palta', 'Tomate', 'Frutilla', 'Jamon']; /// 6 elementos
/* 
const quitoQueso = productos.splice(1,1);

const eliminoPos0 = productos.splice(0,1);
 */
/* const eliminoTodos = productos.splice(0,); */

///JOIN
/* 
sirve para CONCATENER los elementos en un solo string y aplicando un separador
NO modifica nuestro array original
nos devuelve un STRING con la concatenacion de los elementos mediante ese separador
*/

/* const secciones = ['mercadolibre.com', 'calzado', 'femenino', 'sandalias', 'sandaliaX'];

const url = secciones.join('/'); ///me devuelve un string

console.log(url); */


///CONCAT
///junta dos arrays generando uno nuevo con los elementos concatenados
//NO modifica los arrays originales
/* 
const productosLimpieza = ['Jabon','Detergente','Lavandina'];
const productosAlimenticios = ['Leche', 'Cacao', 'Pan', 'Galletitas'];

const productos2 = productosLimpieza.concat(productosAlimenticios); */


///SLICE
/* 
me permite hacer UNA COPIA de una rebanada de mi array
miarray.slice(DESDE DONDE, HASTA )
la posicion de HASTA no la incluye
*/
/* 
const indumentaria = ['vestido', 'pantalon', 'short', 'pollera'];

const ropaDeAbajo = indumentaria.slice(1,3);
 */

///INDEXOF 
/* 
    Nos devuelve la posicion en la que esta ubicado un elemento X
    Si no lo encuentra devuelve -1

*/

/* const indumentaria = ['vestido', 'pantalon', 'short', 'pollera'];
let elemento = prompt('Ingrese un elemento a buscar');
let indice = indumentaria.indexOf(elemento);
if (indice !== -1) { ///lo encontro
    alert(`El elemento ${indumentaria[indice]} se encuentra en la indumentaria`);
}else {
    alert('Ese elemento no se encuentra en la lista');
} */

///INCLUDES
//nos devuelve si un elemento esta o no esta en el array -> true o false

/* const indumentaria = ['vestido', 'pantalon', 'short', 'pollera'];
let elementoX = prompt('Ingrese el elemento a buscar');
if (indumentaria.includes(elementoX)) {
    alert('Existe ese item en la lista');
}else {
    alert('No existe ese item');
} */

///REVERSE
///invierte el orden de los elementos del array
///altera! el array original

const indumentaria = ['vestido', 'pantalon', 'short', 'pollera'];
indumentaria.reverse();