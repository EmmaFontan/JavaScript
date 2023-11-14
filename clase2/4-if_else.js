///El usuario ingresa en una seccion de mi pagina que corresponde a bebidas alcoholicas
///1 - Le pedimos que ingrese su edad
///2 - Le vamos a dejar comprar bebidas alcoholicas solo es mayor o igual a 18 anos de edad
///3 -  Si es menor de 18 años, le vamos a mostrar un mensaje que diga:
///     "Usted no posee permiso para poder comprar en esta seccion"


let edadUsuario; 
const MAYOR_EDAD = 18; ///constante literal

edadUsuario = parseInt(prompt('Ingrese su edad'));

if (edadUsuario >= MAYOR_EDAD) {
    alert('Mostrando la seccion de bebidas alcoholicas....!');
}else { ///camino alternativo al if (si el if da falso)
    alert("Usted no posee permiso para poder comprar en esta seccion");
}

console.log('Resto del codigo...');