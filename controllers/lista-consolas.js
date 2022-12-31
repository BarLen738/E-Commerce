import { consolaServices } from "../servicios/consolas-servicios.js";

const getConsolas = (name, price, imageUrl, id) => {
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

    </div>
    `;

    card.innerHTML = contenido;
    card.dataset.id = id;
    return card;
};

const consolas = document.querySelector("[data-allProducts]"); //ojo

consolas.addEventListener("click", async (evento) => {
    let deleteButton = evento.target.className === "deleteImage";
    if (deleteButton) {
        const consola = evento.target.closest("[data-id]");
        let id = consola.dataset.id;
        consolaServices
            .deleteConsola(id)
            .then((respuesta) => {
                consola.remove();
                console.log(respuesta);
            })
            .catch((error) => console.log(error));
    }
});

const renderConsola = async () => {
    try {
        const listaConsolas = await consolaServices.listaConsolas();

        listaConsolas.forEach((consola) => {
            consolas.appendChild(
                getConsolas(
                    consola.name,
                    consola.price,
                    consola.imageUrl,
                    consola.id,
                )
            );
        });
    } catch (error) {
        console.log(error);
    }
};

renderConsola();