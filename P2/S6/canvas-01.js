console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 300;
canvas.height = 100;

const ctx = canvas.getContext("2d");

ctx.beginPath();

ctx.rect(10,10, 100, 50);

ctx.fillStyle = 'red';
ctx.fill();

ctx.stroke();
ctx.closePath();