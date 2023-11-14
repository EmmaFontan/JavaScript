///OPERADORES LOGICOS
/**
 * AND -> && -> Y
 * OR -> || -> O
 * NOT -> ! -> negacion
 * 
 * El resultado de una operacion logica es TRUE o FALSE
 */

///AND
/// &&
///es verdadero si AMBOS VALORES son verdaderos

/// a: voy a playa ->true
/// b: voy al cine ->true

/// a && b --> true


/// a: voy a playa ->true
/// b: voy al cine ->false

/// a && b --> false


/// a: voy a playa ->false
/// b: voy al cine ->false

/// a && b --> false


////necesitamos uqe una persona que ingreso su edad se evalue
/// que este dentro un rango de edad entre 18 y 30 anios

/* const EDAD_INFERIOR = 18;
const EDAD_SUPERIOR = 30;
let edad = parseInt(prompt('Ingrese su edad'));
 */
/* if (edad >= EDAD_INFERIOR) {
    if (edad <= EDAD_SUPERIOR) {
        alert('Procediendo al registro del cv...');
    }else { ///si no cumple que la edad sea menor o igual a 30
        alert('Usted no posee la edad requerida');
    }
}else { /// si no cumple que sea mayor o igual a 18
    alert('Usted no posee la edad requerida');
} */


/* if (edad >= EDAD_INFERIOR && edad <= EDAD_SUPERIOR) {
    alert('Procediendo al registro del cv...');
}else {
    alert('Usted no posee la edad requerida');
}
 */


///OR
//// ||
/// al menos uno de los operandos debe ser verdadero para que el resultado sea verdadero

/// a: voy a playa ->true
/// b: voy al cine ->true

/// a || b -> true


/// a: voy a playa ->true
/// b: voy al cine ->false

/// a || b


/// a: voy a playa ->false
/// b: voy al cine ->false

/// a || b -> false

///la persona debe tener entre 18 y 30 anios
///la edad no corresponde a ese rango le mostramos un mensaje

/* const EDAD_INFERIOR = 18;
const EDAD_SUPERIOR = 30;
let edad = parseInt(prompt('Ingrese su edad'));

if (edad < EDAD_INFERIOR || edad > EDAD_SUPERIOR) {
    alert('Usted no cumple con los requisitos');
}else {
    alert('Accediendo al registro del cv...');
} */

////NOT
///! -> NEGACION (NO)
///siempre usando valores booleanos (true o false)

/// p -> voy a la playa -> true
/// !p -> false

let var1 = true;
let var2 = !var1;
console.log(var2);


const EDAD_INFERIOR = 18;
const EDAD_SUPERIOR = 30;
let edad = parseInt(prompt('Ingrese su edad'));

if (!(edad < EDAD_INFERIOR || edad > EDAD_SUPERIOR)) {
    alert('Accediendo al registro del cv...');
}else {
    alert('Usted no cumple con los requisitos');
}


