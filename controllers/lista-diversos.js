import { diversoServices } from "../servicios/diversos-servicios.js";

const getDiversos = (name, price, imageUrl, id) => {
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

const diversos = document.querySelector("[data-allProducts]"); //ojo

diversos.addEventListener("click", async (evento) => {
    let deleteButton = evento.target.className === "deleteImage";
    if (deleteButton) {
        const diverso = evento.target.closest("[data-id]");
        let id = diverso.dataset.id;
        consolaServices
            .deleteDiverso(id)
            .then((respuesta) => {
                diverso.remove();
                console.log(respuesta);
            })
            .catch((error) => console.log(error));
    }
});

const renderDiverse = async () => {
    try {
        const listaDiversos = await diversoServices.listaDiversos();

        listaDiversos.forEach((diverso) => {
            diversos.appendChild(
                getConsolas(
                    diverso.name,
                    diverso.price,
                    diverso.imageUrl,
                    diverso.id,
                )
            );
        });
    } catch (error) {
        console.log(error);
    }
};

renderDiverse();