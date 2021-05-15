let directo = document.getElementById("directo");
const video1 = document.getElementById("video1");
const btnv1 = document.getElementById("btnv1");
const btnt = document.getElementById("btnt");
const btnon = document.getElementById("btnon");

//-- Establecer las dimensiones de los vídeos
directo.width=420;
directo.height=200;
video1.width=200;  
video1.height=100;

const TEST_IMAGE_URL = "pruebas.jpg";

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
directo.poster = TEST_IMAGE_URL;
video1.poster = TEST_IMAGE_URL;

//fuentes on
btnon.onclick = () => {
    video1.src="https://drive.google.com/uc?export=download&id=1acEQcG1m4kGnHftIgpnJR_NSTohX1p7j";

    //reproducir desde 0
    video1.currentTime = 0;
    video1.play();

    //muted
    video1.muted;

    //imagen prueba en directo
    directo.poster = TEST_IMAGE_URL;
};

//-- Botón de Test
btnt.onclick = () => {
    directo.poster = TEST_IMAGE_URL;
    directo.src = null;
};

//boton de la camara 1
btnv1.onclick = () => {
    directo.src = video1.src;
    directo.currentTime = video1.currentTime;
    directo.play();
    directo.poster=null;
};