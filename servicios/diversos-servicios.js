//GET

const listaDiversos = () => fetch("http://localhost:3000/diverso?_limit=4")
    .then(respuesta => respuesta.json())
    .catch((error) => console.log(error));

const listaTodosDiversos = () => fetch("http://localhost:3000/diverso/")
    .then(respuesta => respuesta.json())
    .catch((error) => console.log(error));

const listarDiverso = (id) => {
    return fetch(`http://localhost:3000/diverso/${id}`)
        .then((respuesta) => { return respuesta.json() })
};

//POST
const crearDiverso = (name, imageUrl, price) => {
    return fetch(`http://localhost:3000/diverso/`, {
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
const alterarDiverso = async (id, name, price, description) => {
    return fetch(`http://localhost:3000/diverso/${id}`, {
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
const borrarDiverso = async (id) => {
    return await fetch(`http://localhost:3000/diverso/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const diversoServices = {
    listaDiversos,
    listaTodosDiversos,
    listarDiverso,
    crearDiverso,
    alterarDiverso,
    borrarDiverso,
}
