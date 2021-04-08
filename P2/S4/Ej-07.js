console.log("Ejecutando js...")

// Leer el parrafo identificado como test
const test = document.getElementById('test')

// Configurar el manejador para el evento
// de pulsacion de boton
test.onclick = function() {
    console.log("Click sobre el párrafo...")
}