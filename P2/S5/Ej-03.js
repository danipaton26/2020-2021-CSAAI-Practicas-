console.log("Ejecutando js...")

const gui = {
    display: document.getElementById("display"),
    boton: document.getElementById("boton"),
}

// Objeto contador
const counter = {
    valor: 0,
    inc : function(value) {
        this.valor += value;
        gui.display.innerHTML = this.valor;
    }
}

// Ligar el boton al contador
gui.boton.onclick = () => {
    counter.inc(1)
}