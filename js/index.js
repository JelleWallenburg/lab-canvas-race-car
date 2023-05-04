let ctx = document.getElementById('canvas').getContext('2d');
const roadImg = new Image();
roadImg.src = './images/road.png';
// ctx.drawImage(roadImg, 0, 0, 500, 700)
const carImg = new Image();
carImg.src = './images/car.png';

let frames = 0;

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }
};

let intervalId= null;
function startGame() {
  //load parts of the game
  // ctx = document.getElementById('canvas').getContext('2d');
  // const roadImg = new Image();
  // roadImg.src = './images/road.png';
  // roadImg.onload = function () {ctx.drawImage(roadImg, 0, 0, 500, 700)};
  intervalId= setInterval(updateGameArea,10); //setInterval(updateGameArea,1000) requestAnimationFrame(updateGameArea
};

function stop() {
  clearInterval(intervalId)
  }

class Component {
  constructor(x, y, width, height){
    this.x= x;
    this.y= y;
    this.width= width;
    this.height= height;
    
    this.speedX = 0; // used to update the X position
  }

  update(){
    ctx.drawImage(carImg, this.x, this.y, this.width, this.height)
  }

  updateObs() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x = this.x + this.speedX; 
  }

  left () {
    return this.x;
  }
  right () {
    return this.x + this.width;
  }

  top (){
    return this.y;
  }

  bottom(){
    return this.y + this.height;
  }

  crashWith(obstacle){
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
  }
}


const car= new Component(200, 500, 100, 200);

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 37: // left arrow
      if (car.x <= 0){
        car.x=0;
      } else {
        car.speedX = -2;
        console.log('left',car)
      }
      break;
    case 39: // right arrow
      if (car.x >= 400 ){
        car.x= 400;
      } else {
        car.speedX = 2;
        console.log('right',car);
      }
      break;
  }
});

document.addEventListener('keyup', (e) => {
  car.speedX = 0;
});

const myObstacles= []
function updateObstacles(){
  
  frames += 1;
  if (frames % 240 === 0){
    let y= 0;
    let minWidth = 20;
    let maxWidth = 200;
    let width= Math.floor(Math.random()*(maxWidth - minWidth+1) + minWidth);
    let minGap = 200;
    let maxGap = 250;
    let gap= Math.floor(Math.random()*(maxGap-minGap+1) + minGap);
  
    myObstacles.push(new Component(0, y, width, 20));
    myObstacles.push(new Component(width + gap, y, 500 - width - gap , 20));
    console.log(myObstacles);
  }
  for(let i=0; i < myObstacles.length; i++){
    myObstacles[i].y += 1;
    myObstacles[i].updateObs();
  }

}

function checkGameOver(){
  const crashed = myObstacles.some(function (obstacle) {
    return car.crashWith(obstacle);
  })

  if (crashed) {
    stop();
  }
}

function score(){
  const points = Math.floor(frames/5);
  ctx.font= '24px serif';
  ctx.fillStyle = 'black';
  ctx.fillText(`Score: ${points}`, 100, 50)
}


function updateGameArea() {
  ctx.clearRect(0,0, 500, 700); //clear canvas
  ctx.drawImage(roadImg, 0, 0, 500, 700)
  car.newPos(); //update car position
  car.update(); //update car position
  updateObstacles();
  checkGameOver();
  score()
}







