////CREANDO ARRAYS
///un array es un OBJETO que tiene la capacidad de almacenar multiples datos bajo un mismo nombre

const arrayVacio = []; ///sin elementos

const arrayConElementos = ['Pepe', 'Juan', 'Carlos' , 'Luciano'];

console.log(arrayVacio);

console.log(arrayVacio.length); ///cantidad de elementos en mi array
console.log(arrayConElementos);

///Acceder a un elemento en particular

console.log(arrayConElementos[3])

///recorrido de un array

for (let i = 0; i < arrayConElementos.length; i++) {

    console.log(`${i} : ${arrayConElementos[i]}`);
}

