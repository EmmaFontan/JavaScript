////CONStruCTORES


///CONSTRUCTOR DE PRODUCTOS

const Producto = (nombre,precio,marca) => {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
}

///genero mis productos

const producto1 = new Producto("Leche",25.50,"La Serenisima");

let nombreProducto = prompt('Ingrese nombre del producto');
let precioProducto = +prompt('Ingrese precio');
let marcaProducto = prompt('Ingrese marca');

const productoNuevo = new Producto(nombreProducto,precioProducto,marcaProducto);

///muestro productos

function mostrarProducto(producto)
{
    alert(`nombre: ${producto.nombre} \n
           precio: ${producto.precio} \n
           marca: ${producto.marca}     
        `);
}

mostrarProducto(productoNuevo);
mostrarProducto(producto1);