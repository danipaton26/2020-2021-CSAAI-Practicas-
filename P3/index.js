
//definimos canvas
const canvas = document.getElementById("canvas");

canvas.width = 400;
canvas.height = 500;

const ctx = canvas.getContext("2d");


let speed = 3;

let ball = {
    x: canvas.width /2,
    y: canvas.height - 50,
    dx: speed,
    dy: -speed + 1,
    radius: 7,
    draw: function() {
        ctx.beginPath();
          ctx.fillStyle = "white";
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
          ctx.closePath();
        ctx.fill();
    }
};


let raqueta = {
    width: 60,
    height: 10,
    x: canvas.width /2 - 30,
    draw: function(){
        ctx.beginPath();
        ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
        ctx.fillStyle = "white";
        ctx.closePath();
        ctx.fill();
    }
};

function play(){

    if (ball.x <0 || ball.x >= canvas.width - 7) {
        ball.dx = -ball.dx;
      }
    
      if (ball.y <0 || ball.y >= canvas.height - 7) {
        ball.dy = -ball.dy;
      }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.draw();
    raqueta.draw();

    ball.x += ball.dx;
    ball.y += ball.dy;

    requestAnimationFrame(play);
}
play();


