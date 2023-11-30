/**
 * SCOPING
 * 
 * Nos vamos a manejar en dos ambitos
 * AMBITO GLOBAL -> todo el documento
 * AMBITO LOCAL -> function, condicional, for...
 */

/* let variableGlobal = 7;
const PI = 3.14;

function mostrarDato() {
    let variableLocal = 3; ///variable SOLO PERTENECE A LA FUNCION
    console.log(`variable local: ${variableLocal}`);

    console.log(`variable global: ${variableGlobal}`);
}

mostrarDato();
console.log(variableLocal);

 */


/* let numero = 7; ///VARIABLE GLOBAL

function alterarNumero() {
    numero = 10; ///altero la variable GLOBAL
    console.log(numeroLocal); ///imprimo la variable local
}

alterarNumero();
console.log(numero); ////imprimo la variable global */


let numeroGlobal = 2;

function alterarNumero() {
    
    console.log(numeroGlobal); /// 2
}

alterarNumero();