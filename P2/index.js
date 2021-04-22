console.log("Ejecutando js...")

// Elementos de la calculadora
display = document.getElementById("display")
borrar = document.getElementById("borrar")
clear = document.getElementById("clear")
igual = document.getElementById("igual")

//Arrays de los dígitos y de los operadores
let digito = document.getElementsByClassName("digito");
let operador = document.getElementsByClassName("operador");

//Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3,
}
let estado = ESTADO.INIT;

function digito(ev){

    if (estado == ESTADO.INIT) {
        display.innerHTML = ev.target.value;
        estado = ESTADO.OP1;
    }
    else{
        display.innerHTML += ev.target.value;
    }
}

for (let numero of digito){
    numero.onclick = (ev) => {
        display.innerHTML += ev.target.value
        console.log("digito")
    }
}

for (let operacion of operador) {
    operacion.onclick = (ev) => {
        if (estado == ESTADO.OP1){
            display.innerHTML += ev.target.value;
            estado = ESTADO.OPERATION;
            console.log("operador") 
        }
       
    }
}

igual.onclick = () => {
    if (estado == ESTADO.OP1 || estado == ESTADO.OP2) {
        display.innerHTML = eval(display.innerHTML);
        estado = ESTADO.OP1;
    }
}

clear.onclick = (ev) => {
    display.innerHTML = 0;
    console.log("clear")
}