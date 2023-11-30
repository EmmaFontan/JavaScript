///FUNCIONES IMPLICITAS


function saludar() {
    alert('hola como va!');
}


///EXPRESIONES DE FUNCION

///ANONIMA

const saludo = function () { 
                alert('hola como va!');
            };

saludo();


///ARROW FUNCTIONS

const saludoArrow = () => {
            alert('Hola como va!');
        }

saludoArrow();