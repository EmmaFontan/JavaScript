////SALIDAS DE DATOS E INGRESO DE DATOS POR EL NAVEGADOR

///VISUALIZACION DE DATOS
///consola

let numerito;
numerito = 5;

console.log(numerito); ///imprimo por consola el contenido de numerito.

numerito = 8;

console.log(numerito);

///le concateno un string

console.log('El numero es: ', numerito);

///inyecto codigo javascript
///recuerden que para esto el string debe estar con ``
console.log(`El numero ${numerito} es muy lindo`);

///forma tradicional
console.log('El numerito ' + numerito + ' es muy lindo');


///alert
///utilizamos una herramienta PROPIA del navegador
///NO se puede CUSTOMIZAR/ALTERAR

let mensaje;

mensaje = 'Usted es bienvenido a nuestra pagina de internet';

/* alert(mensaje);
alert('HOla que tal');
alert('chau');
alert('El numerito ' + numerito + ' es muy lindo'); */


///INGRESO DE DATOS
////prompt

/* let edad;

edad = prompt('Ingrese su edad');

alert(`Su edad es ${edad}!`); */


// SIEMPRE EL PROMPT LES DEVUELVE UN STRING

let valor1;
let valor2;
let resultado;

valor1 = +prompt('Ingrese un valor entero');
valor2 = +prompt('Ingrese otro valor entero');
resultado = valor1 + valor2;

alert(`El resultado es ${resultado}`);

///formas de convertir un string a numero
/// 1 - parseInt(valor) -> me convierte un string a un entero -> "2.5" -> 2
/// 2 - parseFloat(valor) =>  me convierte un string a un numero real -> "2.5" -> 2.5
/// 3-  +valor -> convierte de string a un numero real
/// 4 - Number(valor) => convierte a un numero real










