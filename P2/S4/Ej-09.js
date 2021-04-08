// Leer el elemento parrafo test2
const test2 = document.getElementById('test2')

// Obtener el elemento párrafo 1 para modificarlo
const test1 = document.getElementById('test1')

test2.onclick = () => {
    console.log("Click sobre el parrafo 2...")

    // Cambio de texto
    test1.innerHTML = "TEXTO CAMBIADO"
}