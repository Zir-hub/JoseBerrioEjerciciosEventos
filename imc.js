let formImc = document.getElementById("imc")

formImc.addEventListener("submit", (e) => {
    e.preventDefault()

    let peso = parseFloat(document.getElementById('peso').value)
    let estatura = parseFloat(document.getElementById('estatura').value) / 100

    console.log(document.getElementById('estatura').value);
    console.log(document.getElementById('peso').value);


    if (peso > 0 && estatura > 0) {
        let imc = peso / (estatura * estatura)
        document.getElementById("imcResultado").innerHTML = imc.toFixed(1)
    } else {
        alert("Ingrese Valores validos")
    }
})