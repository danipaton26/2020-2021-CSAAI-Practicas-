console.log("Ejecutando JS...");


//-- Elementos de la interfaz de la calculadora
display = document.getElementById("display")
boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")


// -- Insertar digito 1
boton1.onclick = () => {
  display.innerHTML += boton1.value;
}

//-- Insertar digito 2
boton2.onclick = () => {
  display.innerHTML += boton2.value;
}

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += suma.value;
}

igual.onclick = () => {
    display.innerHTML = eval(display.innerHTML);
}

clear.onclick = () => {
    display.innerHTML = "0";
}