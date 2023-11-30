const platos = [new Plato("Bife con ensalada", "Lonjas de bife de cordero con ensalada de hojas verdes y tomate", 500, 'principal'),
                new Plato('Pollo al Spiedo', 'Pollo macerado 4 horas girando en un horno', 200.50, 'principal'),
                new Plato('Vitel Tone', 'Lonja de carne con mayonesa y etcetera', 400, 'principal'),
                new Plato('Brownie con helado', 'Brownie humedo de chocolate negro con una bocha de americana', 600, 'postre'),
                new Plato('Flan', 'flan el mismo que comes en tu casa', 300, 'postre'),
                new Plato('Ensalada de lechuga y tomate', 'lechuga y tomate', 200, 'entrada'),
                new Plato('Langostinos', 'langostinos en salsa golf', 300, 'entrada')
            ];

const mesa = [] ///platos que van en la mesa

 /* 
  1 - Bife con ensalada : Lonjas de bife de cordero....
      precio: 500
  2 - Pollo al Spiedo : pollo....
      precio: 400 
 */           

function pedidoMenu() {
    let menuPlatos = `Menu Restaurant El Pepito\n`;
    platos.forEach((plato,index) => {
        menuPlatos = menuPlatos + 
        `${index+1} - ${plato.nombre} : ${plato.descripcion} \n
          precio: ${plato.precio} \n `;
    });
    let opcion = prompt(menuPlatos);
    
    while (opcion < 1 || opcion > platos.length) {
       opcion = prompt(menuPlatos + 'Opcion incorrecta, vuelva a ingresar una opcion: ')
    }

    mesa.push(platos[opcion - 1]);
}

function cerrarMesa() {
    let total = mesa.reduce((total,plato) => { return total + plato.precio}, 0);
    alert(`Su mesa ha sido cerrada, el total es de: $${total}`);
}

function menuPrincipal() {
    let opcion;
    do {
        pedidoMenu();
        opcion = prompt('Desea pedir otro plato? s/n').toLocaleLowerCase();
    }while(opcion !== 'n');
}


menuPrincipal();
cerrarMesa();
