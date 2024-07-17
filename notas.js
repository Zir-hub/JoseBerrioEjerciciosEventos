let notas = [
    {
        id: 1,
        titulo: "Sacar la basura",
        description: "Los martes, jueves y sabados",
        realizada: false,
    },
    {
        id: 2,
        titulo: "Hacer Ejercicio",
        description: "5 vueltas al barrio",
        realizada: false,
    },
    {
        id: 3,
        titulo: "Pasear al perro",
        description: "No olvidar llevar una bolsa para las eces",
        realizada: true,
    }
]

let idGlobal = 3;

function createNota(nota) {
    let notaCard = document.createElement("div")
    notaCard.className = "card col-sm-12 col-md-6 col-lg-3 mx-1 mb-2"

    let titulo = document.createElement("h5")
    titulo.textContent = nota.titulo
    titulo.className = "card-title my-2"
    notaCard.appendChild(titulo)

    let description = document.createElement("p")
    description.textContent = nota.description
    description.className = "card-text"
    notaCard.appendChild(description)

    let btCont = document.createElement("div")
    btCont.className = "details d-flex justify-content-end mb-2"
    notaCard.appendChild(btCont)

    let btBorrar = document.createElement("button")
    btBorrar.type = "submit"
    btBorrar.innerHTML = "Borrar"
    btBorrar.className = "btn btn-danger"
    btCont.appendChild(btBorrar)

    return notaCard
}

let notasCont = document.getElementById("notasCont")

for (let nota of notas) {
        let notaCard = createNota(nota)
        notasCont.appendChild(notaCard)
}
