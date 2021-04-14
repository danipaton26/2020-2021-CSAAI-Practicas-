console.log("Ejecutando js...")

// Elementos de la calculadora
display = document.getElementById("display")
borrar = document.getElementById("borrar")
clear = document.getElementById("clear")
igual = document.getElementById("igual")

//Arrays de los dígitos y de los operadores
digito = document.getElementsByClassName("digito")
operador = document.getElementsByClassName("operador")

for (let numero of digito){
    numero.onclick = (ev) => {
        display.innerHTML += ev.target.value
        console.log("digito!!")
    }
}