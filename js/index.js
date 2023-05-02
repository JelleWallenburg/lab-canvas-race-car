

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();

  function startGame() {
    const ctx = document.getElementById('canvas').getContext('2d');
    const roadImg = new Image();
    roadImg.src = './images/road.png';
    roadImg.onload = function () {ctx.drawImage(roadImg, 0, 0, 500, 700)};

    const carImg = new Image();
    carImg.src = './images/car.png'
    carImg.onload = function () {ctx.drawImage(carImg, 200, 500, 100, 200)}
      };


  }
};







