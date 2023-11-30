///FUNCIONES DE ALTO ORDEN
/* 
    son aquellas funciones que pueden recibir por parametro una ACCION y no solo un valor
    son aquellas funciones que pueden devolver UNA ACCION y no solo un valor

*/

function Dios(pedido) { 
    if (pedido === 'volar') {
        return (nombre) => {
            alert(`${nombre} ahora vuela libremente!`);
        } 
    }else {
        return function(nombre) {
            alert(`${nombre} ahora ejecuta el milagro de ${pedido}`);
        }
    }
}

const elMilagroDeVolar = Dios('volar');
elMilagroDeVolar('Pepe');
elMilagroDeVolar('Fantino');

const elMilagrodeFinDeMes = Dios('Llegar a fin de mes');
elMilagrodeFinDeMes('Roberto');
elMilagrodeFinDeMes('Gonzalo');
