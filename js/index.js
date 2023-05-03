
// const myGameArea

let ctx = null;

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }
};

function startGame() {
  //load parts of the game
  ctx = document.getElementById('canvas').getContext('2d');
  const roadImg = new Image();
  roadImg.src = './images/road.png';
  roadImg.onload = function () {ctx.drawImage(roadImg, 0, 0, 500, 700)};
  // const carImg = new Image();
  // carImg.src = './images/car.png'
  // carImg.onload = function () {ctx.drawImage(carImg, 200, 500, 100, 200)}
  // trigger updateGameArea --> inside window.onload
  updateGameArea();
  setInterval(startGame, 100);
};

class Component {
  constructor(){
    // this.width= width;
    // this.height= height;
    // this.x= x;
    // this.y= y;

    // this.speedX= 0;
    // this.speedY= 0; 
  }
  
  update(){
    const carImg = new Image();
    carImg.src = './images/car.png'
    carImg.onload = function () {ctx.drawImage(carImg, 100, 500, 100, 200)}
  }
  }


const car= new Component();

function updateGameArea() {
  ctx.clearRect(0,0, 500, 700)
  car.update()
}



// function updateGameArea(){
  //clear canvas
  //update player's position
  //update the background movement
  //update 
// }







