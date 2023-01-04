import { diversoServices } from "../servicios/diversos-servicios.js";

const nuevoDiverso = (name, price, imageUrl, id) => {
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

const diversos = document.querySelector("[data-diverse]");

const renderDiverse = async() => {
    try {
        const listaDiversos = await diversoServices.listaDiversos();
        listaDiversos.forEach(elemento => {
            diversos.appendChild(
                nuevoDiverso(
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

renderDiverse();