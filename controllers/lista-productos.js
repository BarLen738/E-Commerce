import { productoServices } from "../servicios/productos-servicios.js";
//import { formatPrice } from "../formatterPrices.js"

const getProducts = (name, price, imageUrl, id) => {
    const card = document.createElement("div");

    const contenido = `
    <div class = "produto">
    <div class = "container">
    <button class = "buttonDelete" type = "button">
    <img class = "deleteImg" src = "../assets/delete.png" alt = "Borrar" /> 
    </button>

    <a href = "../screens/edit-product.html?id=${id}">

    <button class = "buttonEdit" type = "button">
    <img class = "editImage" src = "../assets/edit.png" alt = "Editar" />
    </button>

    </a>
    </div>
    
    <img src = "${imageUrl}" alt = "img">
    <h1 class = "product-name"> ${name} </h1>
    <p class = "preco"> ${price} </p>
    <p class = "id"> ${id} </p>

    </div>
    `;

    card.innerHTML = contenido;
    card.dataset.id = id;
    return card;
};

const productos = document.querySelector("[data-allProducts]");

productos.addEventListener("click", async (evento) => {
    let deleteButton = evento.target.className === "deleteImage";
    if (deleteButton) {
        const producto = evento.target.closest("[data-id]");
        let id = producto.dataset.id;
        productoServices
            .deleteProducto(id)
            .then((respuesta) => {
                producto.remove();
                console.log(respuesta);
            })
            .catch((error) => console.log(error));
    }
});

const render = async () => {
    try {
        const listaProductos = await productoServices.listaTodosProductos();

        listaProductos.forEach((producto) => {
            productos.appendChild(
                getProducts(
                    producto.name,
                    producto.price,
                    producto.imageUrl,
                    producto.id,
                )
            );
        });
    } catch (error) {
        console.log(error);
    }
};

render();