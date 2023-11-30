///FUNCION QUE RECIBE COMO PARAMETRO ACCIONES

const miArray = ['Miranda', 'Pablo', 'Pachu', 'Turri'];
const numeros = [2, 5, 6, 7, 8, 10];
let total = 0;
let total2 = 0;

function suma(valor) {
    total = total + valor;
}

function resta(valor) {
    total2 = total2 - valor
}


function porCadaUno(array,accion,accion2) { 
    for (let elemento of array) {
        accion(elemento);
    }
}

porCadaUno(numeros,suma);
alert(`El total es ${total}`);


porCadaUno(miArray,console.log);

porCadaUno(numeros,suma,resta);

porCadaUno(numeros,(valor) => { total = total + valor });