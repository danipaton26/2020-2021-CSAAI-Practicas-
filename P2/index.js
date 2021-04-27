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
        digit(ev.target.value);
        console.log("digito...")
    }
}

for(i=0; i<operador.length; i++){
    operador[i].onclick=(ev)=>{
        if(estado == ESTADO.OP1){
            
            operacion(ev.target.value);
            console.log("operacion...");
        }
    }
}

function digit(num){

    if (estado == ESTADO.INIT) {
        display.innerHTML = num;
        estado = ESTADO.OP1;
    }
    else if(estado == ESTADO.OP1){
        display.innerHTML += num;
    }
    else if(estado == ESTADO.OPERATION){
        display.innerHTML += num;
        estado = ESTADO.OP2;
    }
    else if(estado == ESTADO.OP2){
        display.innerHTML += num;
    }

}

function operacion(ope){
    if (estado != ESTADO.OPERATION){
        display.innerHTML += ope;
        estado = ESTADO.OPERATION;
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
    estado = ESTADO.OP1;
}

//Borrar
borrar.onclick = (ev) =>{
    display.innerHTML = display.innerHTML.slice(0, -1);

}