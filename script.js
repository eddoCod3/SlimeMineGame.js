let points = 0;
function createEnemy() {
  let enemyGroup = ["Slime.gif", "SlimeDark.gif", "SlimeVolcano.gif"];
  let randomEnemyChoose =
    enemyGroup[Math.floor(Math.random() * enemyGroup.length)];
  let imageEnemy = document.createElement("img");
  let newEnemy = document.createElement("div");

  newEnemy.classList.add("personalEnemy");
  newEnemy.onclick = function () {
    let x = Math.floor(Math.random() * 400);
    let y = Math.floor(Math.random() * 400);
    this.style.left = x + "px";
    this.style.top = y + "px";
    this.style.position = "absolute";
    points++;
  };
  newEnemy.onmousemove = function () {
    let x =5
    let y= 5
    this.style.left = x + "px";
    this.style.top = y + "px";
  }
  imageEnemy.src = `img/${randomEnemyChoose}`;
  newEnemy.append(imageEnemy);
  document.body.appendChild(newEnemy);
  console.log("Generated");
}

function endGameTimer() {
  let timer = 30;
  let timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = timer;

  let timerInterval =setInterval(() => {
    if (timer != 0) {
      timer--;
      timerDisplay.textContent = timer;
    } else {
      endGameMessage();
      clearInterval(timerInterval);
    }
  }, 1000);
}

function generatedEnemies() {
  for (let i = 0; i < 5; i++) {
    createEnemy();
  }
}

function showScore() {
  let pointsDisplay = document.getElementById("points");
  setInterval(() => {
    pointsDisplay.textContent = `Points: ${points}`;
    setLocalStorage()
    changRootVariable()
  }, 1000);

}

function endGameMessage() {
  alert(`Game over  your points:${points}`);
}

function generateRandomHexColor(){
  let hexColor = "#"
  hexColor += Math.floor(Math.random() * 16777215).toString(16)

  return hexColor
}

function setLocalStorage(){
    let displayMaxScore = document.getElementById("maxPoints");
    let higherScore =0;
    displayMaxScore.innerHTML = higherScore;

    if(!higherScore){
        higherScore = points
        localStorage.setItem("higherScore", higherScore);
    }

    return localStorage.getItem("higherScore");
    
  
}

function changRootVariable(){
  let rootCss = document.querySelector(':root');
  rootCss.style.setProperty('--Main--Color', generateRandomHexColor());
}
function startGame() {
    showScore();
    endGameTimer();
    generatedEnemies();
    
  }