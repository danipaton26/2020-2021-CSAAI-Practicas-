console.log("xd")

const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc')
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizador = document.getElementById('deslizador');

//-- Valor del deslizador
const range_value = document.getElementById('range_value');

img.onload = function () {
    console.log("imagen cargada");

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0,0);

};

deslizador.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
  range_value.innerHTML = deslizador.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del desliador
  umbral = deslizador.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral)
      data[i] = umbral;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}
console.log("fin")