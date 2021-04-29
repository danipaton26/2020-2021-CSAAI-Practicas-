
//definimos canvas
const canvas = document.getElementById("canvas");

canvas.width = 400;
canvas.height = 500;

const ctx = canvas.getContext("2d");

const LADRILLO = {
    F: 4,
    C: 10,
    w: 38,
    h: 20,
    padding: 2,
    visible: true
};

const ladrillos = [];

for (let i = 0; i < LADRILLO.F; i++){
    ladrillos[i] = [];
    for (let j = 0; j < LADRILLO.C; j++){
        ladrillos[i][j] = {
            x: (LADRILLO.w + LADRILLO.padding) * j,
            y: (LADRILLO.h + LADRILLO.padding) * i,
            w: LADRILLO.w,
            h: LADRILLO.h,
            padding: LADRILLO.padding,
            visible: LADRILLO.visible
        };
    }

    }
function drawLadrillos() {
    for (let i = 0; i < LADRILLO.F; i++) {
        for (let j = 0; j < LADRILLO.C; j++){
            if (ladrillos[i][j].visible) {
                ctx.beginPath();
                ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.w, LADRILLO.h);
                ctx.fillStyle = "yellow";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
    for (let i = 0; i < LADRILLO.F; i++) {
        for (let j = 0; j < LADRILLO.C; j++){
            if (ladrillos[i][j].visible) {
                ctx.beginPath();
                ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.w, LADRILLO.h);
                ctx.fillStyle = "yellow";
                ctx.fill();
                ctx.closePath();
            }
        }
    }

let speed = 3;

let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

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
        ctx.rect(this.x, canvas.height - this.height - 10, this.width, this.height);
        ctx.fillStyle = "white";
        ctx.closePath();
        ctx.fill();
    }
};

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = true;
    }
    if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = true;
    }
  }

  function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
    }
    if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
    }
  }

  function moveRaqueta(){
      if(rightPressed){
          raqueta.x += 7;
          if(raqueta.x + raqueta.width >= canvas.width){
              raqueta.x = canvas.width - raqueta.width;
          }
      }
      if(leftPressed){
          raqueta.x -= 7;
          if(raqueta.x < 0){
              raqueta.x = 0;
          }
      }
  }

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
    moveRaqueta();
    drawLadrillos();

    ball.x += ball.dx;
    ball.y += ball.dy;

    if (
        ball.x >= raqueta.x && ball.x <= raqueta.x + raqueta.width &&
         ball.y + ball.radius >= canvas.height - raqueta.height - 10) {
        ball.dy = -ball.dy;
        
      }

    

    requestAnimationFrame(play);


}
play();


