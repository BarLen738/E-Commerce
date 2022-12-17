import { productoServices } from "../servicios/productos-servicios.js";
//import { formatPrice } from "../formatterPrices.js"

const nuevoProducto = (name, price, imageUrl, id) => {
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

const productos = document.querySelector("[data-product]"); //data-attribute

const render = async () => {
    try {
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
            productos.appendChild(
                nuevoProducto(
                    elemento.name,
                    elemento.price,
                    elemento.imageUrl,
                    elemento.id));
        });
    }
    catch (error) {
        console.log(error);
    }
};

render();