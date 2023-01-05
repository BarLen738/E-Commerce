//GET

const listaConsolas = () => fetch("http://localhost:3000/consola?_limit=4")
    .then(respuesta => respuesta.json())
    .catch((error) => console.log(error));

const listaTodasConsolas = () => fetch("http://localhost:3000/consola/")
    .then(respuesta => respuesta.json())
    .catch((error) => console.log(error));

const listarConsola = (id) => {
    return fetch(`http://localhost:3000/consola/${id}`)
        .then((respuesta) => { return respuesta.json() })
};

//POST
const crearConsola = (name, imageUrl, price) => {
    return fetch(`http://localhost:3000/consola/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            imageUrl,
            price,
        }),
    })
        .then((respuesta) => {
            if (respuesta.ok) {
                return respuesta.body;
            }
            throw new Error("No fue posible crear la consola");
        });
};

//PUT/PATCH
const alterarConsola = async (id, name, price, description) => {
    return fetch(`http://localhost:3000/consola/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            description,
        }),
    })
        .then((respuesta) => {
            return respuesta.json();
        })
        .catch((error) => console.log(error));
};

//DELETE
const borrarConsola = async (id) => {
    return await fetch(`http://localhost:3000/consola/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const consolaServices = {
    listaConsolas,
    listaTodasConsolas,
    listarConsola,
    crearConsola,
    alterarConsola,
    borrarConsola,
}
