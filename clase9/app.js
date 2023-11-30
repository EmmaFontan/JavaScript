////ELEMENTOS DEL DOM
////El padre de todos es window

///hijo y padre de nuestra pagina -> document

////acceder a los elementos del DOM

///obtencion de un elemento del DOM

/* ////POR ID
///id debe ser UNICO e IRREPETIBLE
///si no existe ese id, nos devolvera null

const tituloTablita = document.getElementById('mi-header');
if (tituloTablita != null) {
    console.log(tituloTablita);
}

///POR CLASE
///pueden existir varios elementos que compartan la misma clase
///si no hay ningun elemento que tenga esa clase, devuelve un array vacio []
const headingsMeli = document.getElementsByClassName('meli');
console.log(headingsMeli)


*/
///POR TAG
///me traigo elementos por nombre de tag
///si no hay ninguno devuelve array vacio []

const elementsPorTag = document.getElementsByTagName('h1');


 

////USO DE LOS ATRIBUTOS

const tituloTablita = document.getElementById("mi-header");

tituloTablita.textContent = "Mi carrito";

///modificar clases
////agregar o quitar clases
let validacion = false;
if (validacion) {
  tituloTablita.classList.add("meli-bien");
  tituloTablita.classList.remove("meli-mal");
} else {
  tituloTablita.classList.add("meli-mal");
  tituloTablita.classList.remove("meli-bien");
}

const contenedor = document.getElementById("contenedor-tabla");

contenedor.innerHTML = `
    <table class="table table-dark">         
    <thead class="thead-dark">
        <tr id="trId">
            <th># item</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
        </tr>
    </thead>
    <tbody id="items" class="table-striped"></tbody>
    <tfoot>
        <tr>
            <th id="total"></th>
        </tr>
    </tfoot>
    </table>
`;


