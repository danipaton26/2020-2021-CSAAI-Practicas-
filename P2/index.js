console.log("Ejecutando js...")

// Elementos de la calculadora
display = document.getElementById("display")
borrar = document.getElementById("borrar")
clear = document.getElementById("clear")
igual = document.getElementById("igual")

//Arrays de los dígitos y de los operadores
let digitos = document.getElementsByClassName("digito");
let operador = document.getElementsByClassName("operador");

//Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3,
}
let estado = ESTADO.INIT;

for(i=0; i<digitos.length; i++){
    digitos[i].onclick=(ev)=>{
        digitos(ev.target.value);
    }
}

for(i=0; i<operador.length; i++){
    operador[i].onclick=(ev)=>{
        operador(ev.target.value);
    }
}

function digito(num){

    if (estado == ESTADO.INIT) {
        display.innerHTML = num;
        estado = ESTADO.OP1;
    }
    else{
        display.innerHTML += num;
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