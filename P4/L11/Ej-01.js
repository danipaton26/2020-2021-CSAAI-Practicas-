console.log("xd")

const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc')
const ctx = canvas.getContext('2d');

img.onload = function () {
    console.log("imagen cargada");

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0,0);
}