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

let notasCont = document.getElementById("notasCont")
let btGuardar = document.getElementById("btGuardar")
let tituloNota = document.getElementById("title")
let descripcionNota = document.getElementById("description")
let filterCheck = document.getElementById("filterCheck")
let filterShear = document.getElementById("filterShear")

function crearNota(nota) {
    let notaHTML = `
    <div class="card col-sm-12 col-md-6 col-lg-4 p-0" id="note-${nota.id}">
            <div class="card-header p-0 d-flex justify-content-start py-2">
                <input class="form-check-input mx-2" onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ?
                    "checked" : ""} id="note-${nota.id}">
                <h5 class="card-title">${nota.titulo}</h5>
            </div>
            <p class="card-text p-2">${nota.description}</p>
            <div class="d-flex justify-content-end">
                <button type="button" onclick="borrarNota(${nota.id})" class="btn btn-danger m-2">Borrar Nota</button>
            </div>
    </div>
    `
    return notaHTML
}

function pintarNotas(notas, notasCont) {
    let notasHTML = ""
    if (notas.length > 0) {
        for (let nota of notas) {
            notasHTML += crearNota(nota)
        }
        notasCont.innerHTML = notasHTML
    } else {
        notasCont.innerHTML = ""
        let noHayNotas = document.createElement("div")
        noHayNotas.textContent = "NO HAY NOTAS PARA MOSTRAR"
        notasCont.appendChild(noHayNotas)
    }
}

function agregarNota(titulo, texto) {
    idGlobal++
    let nota = {
        id: idGlobal,
        titulo: titulo,
        description: texto,
        realizada: false
    }
    notas.push(nota)
}

function borrarNota(id) {
    let notaABorrar = notas.findIndex(nota =>
        nota.id == id)
    notas.splice(notaABorrar, 1)
    pintarNotas(notas, notasCont)
}

function limpiarCampos() {
    tituloNota.value = ""
    descripcionNota.value = ""
}

function marcarRealizada(id){
    let i = notas.findIndex(nota => nota.id == id)
    notas[i].realizada = !notas[i].realizada
    pintarNotas(notas, notasCont)
}

function filtrarPorRealizada(notas){
    if (filterCheck.checked) {
        return notas.filter(nota => nota.realizada)
    }
    return notas
}

function filtrarPorTexto(notas, texto){
    let notasFiltradas = notas.filter(nota => nota.titulo.toLowerCase().includes(texto)
    || nota.description.toLowerCase().includes(texto))
    return notasFiltradas
}

pintarNotas(notas, notasCont)

btGuardar.addEventListener("click", () => {
    let titulo = tituloNota.value
    let description = descripcionNota.value

    if (titulo == "" || description == "") {
        alert("Faltan campos por llenar")
    } else {
        agregarNota(titulo, description)
        pintarNotas(notas, notasCont)
        tituloNota.value = ""
        descripcionNota.value = ""
        filterCheck.checked = false
        filterShear.value = ""
    }
})

filterCheck.addEventListener("click", () => {
    let notasFilter = filtrarPorRealizada(notas)
    notasFilter = filtrarPorTexto(notasFilter, filterShear.value.toLowerCase())
    pintarNotas(notasFilter, notasCont)
})

filterShear.addEventListener("keyup", () => {
    let notasFilter = filtrarPorTexto(notas, filterShear.value.toLowerCase())
    notasFilter = filtrarPorRealizada(notasFilter)
    pintarNotas(notasFilter, notasCont)
})
