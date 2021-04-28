const canvas = document.getElementById("canvas");

canvas.width = 400;
canvas.height = 600;

const ctx = canvas.getContext("2d");

let x = 1;
let y = 1;

let velx = 3;
let vely = 0.5;


    ctx.beginPath();
      ctx.rect(5, 5, 20, 20)
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.stroke();
    ctx.closePath();

