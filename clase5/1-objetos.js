/* 
////caracteristicas
let nombrePersona1;
let apellidoPersona1;
let edadPersona1;
let dniPersona1;



///caracteristicas
let nombrePersona2;
let apellidoPerson2;
let edadPersona2;
let dniPersona2;

 */
/// [String, Boolean, Number, Object]

////declarando OBJETOS

///AHORA SURGIO UN NUEVO TIPO DE DATO -> Object

///1 - FORMA LITERAL de declaracion de objetos

/* const unaPersona = {
            nombre: 'pepe',
            apellido: 'lopez',
            edad: 27,
            dni: ''
}

console.log(unaPersona);
//alert(unaPersona); ===> solo se ve [object Object] 


////Como accedo a una caracteristica/propiedad/clave/atributo de mi objeto

console.log(unaPersona.edad);
alert(`${unaPersona.nombre} ${unaPersona.edad} ${unaPersona.dni}`);


////Puedo modificar el valor de los atributos
unaPersona.edad = 36;
console.log(unaPersona);


///quiero agregar una clave/atributo nueva a mi objeto ya creado
unaPersona.peso = 42.50;
console.log(unaPersona);

 */
//delete unaPersona.peso; ==> elimino una clave



///OTRA FORMA DE ACCEDER A LOS ATRIBUTOS
///mediante los corchetes

const otraPersona = {
            nombre: 'Juana',
            apellido: 'Lopez',
            edad: 25,
            dni: '34256178'
};

/* console.log(otraPersona['nombre']);
otraPersona['edad'] = 28;
otraPersona['peso'] = 50.20;
 */
/* 
function mostrarAtributo(atributo, persona) { 
    alert(persona[atributo]);
}

mostrarAtributo('nombre',otraPersona); */


let atributo = prompt('Ingrese el atributo');
alert(otraPersona[atributo]);

///recorrer las propiedades del objeto
////for.. in
///para cada propiedad que hay en ese objeto, ejecuto las instrucciones utilizando esa propiedad

for (let propiedad in otraPersona) {
    alert(`${propiedad}: ${otraPersona[propiedad]}`);
}


