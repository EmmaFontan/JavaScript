/**
 * calculadora
 * 
 * '+' sumar
 * '-' restar
 * '*' multiplicacion
 * '/' division
 * 
 * le pedimos dos valores al usuario y luego la operacion que desea realizar. 
 */

let num1;
let num2;
let operacion;
let resultado = 'ERROR';

const SUMA = '+';
const RESTA = '-';
const DIVISION = '/';
const PRODUCTO = '*';
const SALIR = 'S';

function operacionAritmetica(num1,num2,operacion) {
    let resultado = 'ERROR'; ///variable propia de la funcion

    switch(operacion) {
        case SUMA: 
                  resultado = num1 + num2;  
                  break; ///corta con el flujo del switch (sale de las llaves)
        case RESTA:
                  resultado = num1 - num2;
                  break;
        case PRODUCTO:
                  resultado = num1 * num2;
                  break;
        case DIVISION:
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    alert('No se puede dividir por 0!');
                }
                break;
        default:
            alert('Usted ha ingresado una operacion incorrecta');
    }

    alert(`El resultado es: ${resultado}`);

}



do {
    operacion = prompt('Bienvenido a la calculadora!' + '\n'
        + '"+" sumar' + '\n'
        + '"-" restar' + '\n'
        + '"*" multiplicar' + '\n'
        + '"/" dividir' + '\n'
        + '"S" salir' + '\n'
        + 'Ingrese la operacion que desea realizar:');

    if (operacion !== SUMA && operacion !== RESTA && operacion !== DIVISION && operacion !== PRODUCTO && operacion !== SALIR) {
        alert('Usted ha ingresado una operacion incorrecta');
    } else {
        if (operacion !== 'S') {
            num1 = +prompt('Ingrese un valor para el numero posicionado a la izquierda');
            num2 = +prompt('Ingrese un valor para el numero posicionado a la derecha');

          operacionAritmetica(num1,num2,operacion);
        }
    }
} while (operacion !== 'S');

alert('Gracias por usar la calculadora!');