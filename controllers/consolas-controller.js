import { consolaServices } from "../servicios/consolas-servicios.js";

const nuevaConsola = (name, price, imageUrl, id) => {
    const card = document.createElement("div");
    const contenido = `
    <div class = "produto">
    <img src = "${imageUrl}" alt = "img">
    <h1 class = "product-name"> ${name} </h1>
    <p class = "preco"> ${(price)}</p>
    <a class = "ver-produto" href = "../screens/producto.html?id=${id}"> Ver producto</a>
    
    </div>
    `;
    
    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;

};

const consolas = document.querySelector("[data-console]");

const renderConsole = async() => {
    try {
        const listaConsolas = await consolaServices.listaConsolas();
        listaConsolas.forEach(elemento => {
            consolas.appendChild(
                nuevaConsola(
                    elemento.name,
                    elemento.price,
                    elemento.imageUrl,
                    elemento.id
                )
            );
        });
    }
    catch (error) {
        console.log(error);
    }
};

renderConsole();