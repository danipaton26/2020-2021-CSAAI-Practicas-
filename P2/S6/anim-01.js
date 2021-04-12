const canvas = document.getElementById("canvas");

canvas.width = 300;
canvas.height = 100;

const ctx = canvas.getContext("2d");

let x = 1;
let y = 1;

let velx = 3;
let vely = 0.5;

function update()
    {
        console.log("test");
        if (x <=0 || x >= canvas.width - 20){
          velx = -velx
        }
        if (y <=0 || y>= canvas.height - 20){
          vely = -vely
        }

        x = x + velx;
        y = y + vely;
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       
       ctx.beginPath();
         ctx.rect(x, y, 20, 20);
         ctx.fillStyle = 'yellow';
         ctx.fill();
         ctx.stroke();
       ctx.closePath();

       requestAnimationFrame(update);
    }
update();