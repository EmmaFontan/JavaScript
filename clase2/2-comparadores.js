///COMPARADAORES
///el resultado de una cOMPARACION es siempre verdadero o falso

/**
 *  == igual
 * === estrictamente igual
 * != distinto
 * !== estrictamente distinto
 * >= > <= <  mayor o igual, mayor....
 * 
 */


///IGUAL
/// ==
/// NO CONFUNDIR CON LA ASIGNACION!!! a = 3

let a = 3;
let b = 3; 


if (a == b) {
    console.log(`${a} es igual a ${b}`);
}

console.log('Aca sigue el resto del codigo...');

////ESTRICTAMENTE IGUAL
///COMPARA QUE SEA IGUAL EN VALOR Y ADEMAS EN TIPO
/// ===


let a1;
let b1;

a1 = +prompt('Ingrese un numero entero'); ///Number
b1 = prompt('Ingrese otro numero entero'); ///String

///parto primero por el igual

if (a1 == b1) {
    console.log(`${a1} es igual ${b1}`); 
}

///estrictamente igual

if (a1 === b1) {
    console.log(`${a1} es estrictamente igual ${b1}`); 
}






///DISTINTO
/// !=

let nombre;
nombre = prompt('Ingrese su nombre');

if (nombre != "") {
    console.log(`Hola ${nombre} !!!`);
}

///otro ejemplo

let a2 = 3;
let b2 = '3';

if (a2 != b2) {
    console.log('Los valores son distintos');
}

///ESTRICTAMENTE DISTINTO

if (a2 !== b2) {
    console.log('Los valores son distintos o el tipo es distinto');
}



///OPERADORES ANGULARES
//>= > <= <  mayor o igual, mayor....

let edad;

edad = parseInt(prompt('Ingrese su edad')); ///Number 18  18.6 -18 PI

if (edad >= 18) {
    alert('Bienvenido al sector de bebidas alcoholicas');
} 


