const productos = [];
productos.push(new Producto("chocolate", 250, "Cadbury"));
productos.push(new Producto("Leche", 420.3, "La Serenisima"));
productos.push(new Producto("Gomitas", 250, "Mogul"));
productos.push(new Producto("Desodorante", 330, "Rexona"));
productos.push(new Producto("Yogur", 222, "La Serenisima"));

const carrito = [];
carrito.push(new Item(productos[0], 3));
carrito.push(new Item(productos[1], 2));
carrito.push(new Item(productos[2], 1));

///paso 1: me traigo el elemento
///paso2: rellenamos el body de la tabla con las filas


function dibujarTabla() {
    const bodyTabla = document.getElementById("items");
    bodyTabla.innerHTML = ``; ///procuro de que el body este vacio
    carrito.forEach((item,index) => {
          bodyTabla.innerHTML =  bodyTabla.innerHTML +
            `<tr>
                <th>${index + 1}</th>
                <td>${item.producto.nombre}</td>
                <td>${item.producto.marca}</td>
                <td>${item.cantidad}</td>
                <td>${item.producto.precio}</td>
            </tr>    
        `;
        console.log(bodyTabla.innerHTML);
    });
}


dibujarTabla();