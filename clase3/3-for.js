///BUCLE WHILE

/*
 while(CONDICION_VERDADERA) {
    SENTENCIAS...
 }

EVALUAR - EJECUTA SENTENCIAS - EVALUAR - EJECUTA SENTENCIAS ... 

*/


/**
 Un programa que le permita a un usuario ingresar elementos en el carrito de compras
 hasta que el decida no ingresar mas introduciendo la palabra 'no'
    => a medida que se agregan elementos que se sumen sus precios y cantidad
    => una vez que el usuario dijo que no, mostramos el total del carrito
 
 **/


///ACUMULADORES
///todo acumulador es muy importante que este inicializado en algun valor

let total = 0;  ///acumulador
let precio;
let cantidad;
let continuar = 'si'; ///inicializo en si ...

while (continuar === 'si' ) {
    precio = +prompt('Ingrese precio del nuevo producto');
    cantidad = +prompt('Ingrese cantidad');
    total = total + precio*cantidad;
    continuar = prompt('Desea ingresar otro item? si/no');
    while (continuar !== 'no' && continuar !== 'si') {
        continuar = prompt('Debe ingresar "no" o "si"');
    }
}

alert(`El total del carrito es de $${total}`);

///ej que suma del 1 al 10

/* let n = 0;
 */
/* for (let k = 1; k <= 10 ; k++) {
    n = n + k;
    console.log(n);
} */

/* let k = 1;

while (k <= 10) {
    n = n + k;
    k = k + 1;
} */


