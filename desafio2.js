const CursoyEbook = [new Cursos('Pasteleria desde cero', 35 ,'Curso de Pasteleria y Reposteria'),
                    new Cursos('Reposteria en vasos', 50 ,'Curso de reposteria en vasos'),
                    new Cursos('100 recetas de comida vegana', 17 ,'Ebook'),
                    new Cursos('27 formas de hacer tortas', 23 ,'Ebook')
            ];

const Informacion = []
           

function infoCursos() {
    let menuCursos = `Informacion de los cursos e Ebook\n`;
    CursoyEbook.forEach((Cursos,index) => {
        menuCursos = menuCursos + 
        `${index+1} - ${Cursos.nombre} : ${Cursos.categoria} \n
          precio: ${Cursos.precio} \n `;
    });
    let opcion = prompt(menuCursos);
    
    while (opcion < 1 || opcion > CursoyEbook.length) {
       opcion = prompt(menuCursos + 'Opcion incorrecta, vuelva a ingresar una opcion: ')
    }

    Informacion.push(CursoyEbook[opcion - 1]);
}

function realizarCurso() {
    let total = Informacion.reduce((total,Cursos) => { return total + Cursos.precio}, 0);
    alert(`Su compra ah sido aprovada, el total es de: $${total}`);
}

function menuPrincipal() {
    let opcion;
    do {
        infoCursos();
        opcion = prompt('Desea agregar algun Curso o Ebook mas? s/n').toLocaleLowerCase();
    }while(opcion !== 'n');
}


menuPrincipal();
realizarCurso();
