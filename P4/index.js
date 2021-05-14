console.log("xd")

const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc')
const ctx = canvas.getContext('2d');

img.onload = function () {
    console.log("imagen cargada");

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0,0);

    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data

    for (let i = 0; i < data.length; i+=4) {
        data[i] = 0; //-- Canal rojo a 0
      }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);

    console.log("Tamañp de data: " + data.length)

    npixels = canvas.width * canvas.height
  console.log("Anchura (en pixeles): " + canvas.width)
  console.log("Altura (en pixeles): " + canvas.height)
  console.log("Pixeles totales: " + npixels)

  //-- Puesto que cada pixel ocupa 4 bytes, el array de píxeles
  //-- tiene un tamaño de 4 * numero de pixeles
  console.log("Total de datos de la imagen: " + npixels * 4)
};
console.log("fin")