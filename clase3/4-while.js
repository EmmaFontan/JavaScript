/* let total = 0;  ///acumulador
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
 */

///estructura do-while
///nos permite que al menos 1 vez el codigo dentro del ciclo se ejecute

let total = 0;  ///acumulador
let precio;
let cantidad;
let continuar; 

do {
    precio = +prompt('Ingrese precio del nuevo producto');
    cantidad = +prompt('Ingrese cantidad');
    total = total + precio*cantidad;
    continuar = prompt('Desea ingresar otro item? si/no');
    while (continuar !== 'no' && continuar !== 'si') {
        continuar = prompt('Debe ingresar "no" o "si"');
    } 
}while (continuar === 'si');


///do-while
///EJECUTA SENTENCIAS - EVALUAR - EJECUTA SENTENCIAS - EVALUAR....


//while
/// EVALUAR - EJECUTA SENTENCIAS - EVALUAR - EJECUTA SENTENCIAS...