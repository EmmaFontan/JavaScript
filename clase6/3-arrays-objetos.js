///lista de objetos

const carrito = [{nombre: 'galletitas', precio: 12.50}, {nombre: 'leche', precio: 50}];

console.log(carrito);


///recorremos el array de objetos

///for..of
let total = 0;

for (let item of carrito) {
    total = total + item.precio;
}

alert('El total es ' + total);


///utilizando una lista de objetos con las clases de los archivos

const carrito2 = [];

const productito1 = new Producto('Pote de Helado',500, 'La Veneziana');

carrito2.push(new Item(productito1,2));

for (let item of carrito2) {
    alert(item.producto.nombre);
}