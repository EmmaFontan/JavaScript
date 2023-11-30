////Foreach
/* 
    por cada uno de los elementos que componen mi array ejecuto la funcion que le envio
    por parametro al foreach
La funcion que yo envio en el parametro debe tener la capacidad de recibir Un parametro 
(el mapeo del elemento con mi parametro en la funcion)

*/

/* const miArray = ['Miranda' , 'Pablo', 'Pachu', 'Pedro'];

miArray.forEach(function(nombre) {
                   alert(`Hola ${nombre}`)
                });
 */

////FIND
/* 
Realiza una busqueda segun una accion que aplique a un criterio 
si no encuentra nos devuelve undefined
solamente devuelve el PRIMERO que coincide con nuestro criterio

*/


/* 
const lecheEncontrada = productos.find((item) => { return item.marca === 'pepe'});
console.log(lecheEncontrada);
 */
///FILTER
/* 
    realiza una busqueda en base a un criterio
    nos va a devolver todos los elementos que coincidan con ese criterio
    nos devuelve un array
    y si no coincide ninguno sera un array VACIO

*/
/* const busqueda = prompt('Ingrese busqueda por marca')
const productosSerenisima =  productos.filter((item) => { return item.marca.includes(busqueda)});

for (const producto of productosSerenisima) {
    alert(`nombre: ${producto.nombre}`);
}
 */

////SOME

/* 
    Devuelve true si existe AL MENOS un elemento que cumpla con el criterio de busqueda
    de lo contrario devuelve false

*/

/* if(productos.some((item)=> { return item.marca === 'Rexona'})) {
    alert('Le hacemos un descuento...');
}else {
    alert('No hacemos descuento');
} */

///METODOS DE TRANSFORMACION
/* 
    devuelve un array CON LA MISMA CANTIDAD DE ELEMENTOS pero transformados
    el array original NO se modifica

*/

///Map

/* const productosConIVA = productos.map((item) => {
                        return {nombre: item.nombre, marca: item.marca, precioBruto: item.precio, precioIVA: item.precio*1.21};
});

for (const producto of productosConIVA) {
    console.log(producto);
}
 */

////Reduce

////Reduce

/* 
    tiene 2 parametros -> array.reduce(MI_FUNCION,VALOR_INICIAL_ACUMULADOR);
    miarreglo.reduce((ACUMULADOR, ITEM) => { return ACUMULADOR + item.precio }, VALOR_INICIAL_ACUMULADOR)
    })

*/

const productos = [];
productos.push(new Producto('chocolate', 250, 'Cadbury'));
productos.push(new Producto('Leche', 420.30, 'La Serenisima'));
productos.push(new Producto('Gomitas', 250, 'Mogul'));
productos.push(new Producto('Desodorante', 330, 'Rexona'));
productos.push(new Producto('Yogur', 222, 'La Serenisima'));


const carrito = [];
carrito.push(new Item(productos[0], 3));
carrito.push(new Item(productos[1], 2));
carrito.push(new Item(productos[2], 1));

const total = carrito.reduce((acumulador,item) => {
            return acumulador + item.producto.precio*item.cantidad;
}, 0);


alert(`El total del carrito es de ${total}`);



