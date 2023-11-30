const GORRAS = 2100 ;
const REMERAS = 5000 ;
const CHOMBAS = 6200 ;
const BUZOS = 12500 ;

let nombre;
let cantidad;
let productos;
let total = 0;
let continuar;
let factura = "";

nombre = prompt ("bienvenido a WIldvest Indumentaria!\n  Ingrese su nombre: ");

do {
    productos = prompt(
        "Ingrese un producto:\n 1.GORRAS\n 2.REMERAS\n 3.CHOMBAS\n 4.BUZOS"
    );
        switch (parseInt(productos)) {
        case 1:
            cantidad = prompt("Ingrese la cantidad de GORRAS: ");
            total += GORRAS * parseInt(cantidad);
            factura += `GORRAS x${cantidad}: $${GORRAS * parseInt(cantidad)}\n`;
            break;
        case 2:
            cantidad = prompt("Ingrese la cantidad de REMERAS: ");
            total += REMERAS * parseInt(cantidad);
            factura += `REMERAS x${cantidad}: $${REMERAS * parseInt(cantidad)}\n`;
            break;
        case 3:
            cantidad = prompt("Ingrese la cantidad de CHOMBAS: ");
            total += CHOMBAS * parseInt(cantidad);
            factura += `CHOMBAS x${cantidad}: $${CHOMBAS * parseInt(cantidad)}\n`;
            break;
        case 4:
            cantidad = prompt("Ingrese la cantidad de BUZOS: ");
            total += BUZOS * parseInt(cantidad);
            factura += `BUZOS x${cantidad}: $${BUZOS * parseInt(cantidad)}\n`;
            break;
        default:
            alert("Opción no válida. Por favor, elija un producto válido.");
    }

    continuar = confirm("¿Desea agregar más productos?");
} while (continuar);

alert(`FACTURA:\n${factura}\nTOTAL: $${total}\nGracias por su compra, ${nombre}!`);