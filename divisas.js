let cop = document.getElementById("cop")
let usd = document.getElementById("usd")
const rate = 3936.95

cop.addEventListener("keyup", (e) => {
    usd.value = (e.target.value / rate).toFixed(2)
})

usd.addEventListener("keyup", (e) => {
    cop.value = (e.target.value * rate).toFixed(2)
})
