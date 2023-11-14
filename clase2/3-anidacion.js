///ANIDACION

///Si el usuario tiene entre 18 y 30 anios puede completar el cv en la pagina, sino 
// le mostrara un mensaje avisandole que no posee la edad correspondida

const EDAD_SUPERIOR = 30;
const EDAD_INFERIOR = 18;

let edad;
edad = parseInt(prompt('Ingrese su edad'));

if (edad >= EDAD_INFERIOR) {
    if (edad <= EDAD_SUPERIOR) {
        alert('Procediendo al registro del cv...');
    }else { ///si no cumple que la edad sea menor o igual a 30
        alert('Usted no posee la edad requerida');
    }
}else { /// si no cumple que sea mayor o igual a 18
    alert('Usted no posee la edad requerida');
}

