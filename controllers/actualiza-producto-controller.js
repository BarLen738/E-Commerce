import { productoServices } from "../servicios/productos-servicios.js"

const getUrl = new URL(window.location);

const id = getUrl.searchParams.get("id");

const inputImageUrl = document.querySelector("[data-url]");
const inputNombre = document.querySelector("[data-nombre]");
const inputPrecio = document.querySelector("[data-precio]");
const inputDescripcion = document.querySelector("[data-descripcion]");

productoServices.listarProducto(id)
.then((datos) => {
    inputImageUrl.setAttribute("src", datos.imageUrl);
    inputNombre.value = datos.name;
    inputPrecio.value = datos.price;
    inputDescripcion.value = datos.description; 
});

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    productoServices
    .alterarProducto(
        id,
        inputNombre.value,
        inputPrecio.value,
        inputDescripcion.value,
    )
    .then(() => {
        window.location.href = "../screens/producto.html";
    });
});