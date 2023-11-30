///FUNCION CON PARAMETROS DE ENTRADA

/* function saludar(nombrePersona) { 
    alert(`hola ${nombrePersona}`);
}


saludar('pepe'); 


let nombrecito = prompt('Ingrese su nombre');
saludar(nombrecito);
 */

const SUMA = '+';
const RESTA = '-';
const PRODUCTO = '*';
const DIVISION = '/';


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



operacionAritmetica(3,5,'+');
