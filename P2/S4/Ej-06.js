// Manejador del evento

function manejador_parrafo()
{
    console.log("Click sobre el parrafo")
}

console.log("Ejecutando js...")

const test = document.getElementById('test')

test.onclick = manejador_parrafo;