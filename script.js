let points = 0;
const enemyGenerator = {
  enemyGroup: ["Slime.gif", "SlimeDark.gif", "SlimeVolcano.gif"],

  createEnemy: function () {
    const randomEnemyChoose = this.getRandomEnemy();
    const newEnemy = this.createEnemyElement();
    const [x, y] = this.getRandomPosition();
    this.setPosition(newEnemy, x, y);
    this.addEventHandlers(newEnemy);
    this.appendEnemyToDOM(newEnemy, randomEnemyChoose);
    console.log("Generated");
  },


  getRandomPosition: function () {
    const maxX = 400; 
    const maxY = 400; 
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    return [x, y];
  },

  setPosition: function (enemy, x, y) {
    enemy.style.left = x + "px";
    enemy.style.top = y + "px";
  },

  removeEnemy: function (enemy) {
    enemy.remove();
  },
  getRandomEnemy: function () {
    return this.enemyGroup[Math.floor(Math.random() * this.enemyGroup.length)];
  },

  createEnemyElement: function () {
    const newEnemy = document.createElement("div");
    newEnemy.classList.add("personalEnemy");
    return newEnemy;
  },

  addEventHandlers: function (enemy) {
    enemy.addEventListener("click", () => this.handleEnemyClick(enemy));
    enemy.addEventListener("mousemove", () => this.handleEnemyMousemove(enemy));
  },

  handleEnemyClick: function (enemy) {
    const x = Math.floor(Math.random() * 400);
    const y = Math.floor(Math.random() * 400);
    enemy.style.left = x + "px";
    enemy.style.top = y + "px";
    points++;
    this.removeEnemy(enemy);
  },

  handleEnemyMousemove: function (enemy) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    enemy.style.left = x + "px";
    enemy.style.top = y + "px";
    this.playAudio();
  },

  appendEnemyToDOM: function (enemy, randomEnemyChoose) {
    const imageEnemy = document.createElement("img");
    imageEnemy.src = `img/${randomEnemyChoose}`;
    enemy.append(imageEnemy);
    document.body.appendChild(enemy);
  },

  playAudio: function () {
    let music = new Audio("audio/slime_jump.mp3");
    music.play();
  },
};

const timer = {
  duration: 30,
  intervalId: null,
  displayElement: null,

  start: function () {
    this.displayElement = document.getElementById("timer");
    this.displayElement.textContent = this.duration;

    this.intervalId = setInterval(() => {



      if (this.duration > 0) {
        this.duration--;
        this.updateDisplay();
      } else {
        this.endGame();
      }
    }, 1000);
  },

  updateDisplay: function () {
    this.displayElement.textContent = this.duration;
    if (this.duration <= 10) {
      this.displayElement.style.color = "rgb(255, 0, 0)"; // Bright red color
    }
  },

  endGame: function () {
    clearInterval(this.intervalId);
    endGameMessage();
  },
};

function showScore() {
  const pointsDisplay = document.getElementById("points");

  setInterval(() => {
    pointsDisplay.textContent = `Points: ${points}`;
    setLocalStorage();
    changRootVariable();
  }, 1000);
}
function endGameMessage() {
  alert(`Game over  your points:${points}`);
}
function generateRandomHexColor() {
  let hexColor = "#";
  hexColor += Math.floor(Math.random() * 16777215).toString(16);

  return hexColor;
}
function setLocalStorage() {
  let displayMaxScore = document.getElementById("maxPoints");
  let higherScore = parseInt(localStorage.getItem("higherScore")) || 0;
  displayMaxScore.innerHTML = `Max Score : ${higherScore}`;

  if (points > higherScore) {
    higherScore = points;
    localStorage.setItem("higherScore", higherScore);
  }

  return higherScore;
}
function changRootVariable() {
  let rootCss = document.querySelector(":root");
  rootCss.style.setProperty("--Main--Color", generateRandomHexColor());
}
function verifyEnemyQuantity() {
  const enemyElements = document.getElementsByClassName("personalEnemy");
  if (enemyElements.length === 0) {
    alert("You cleared the game!");
  }
}
function startGame() {
  showScore();
  timer.start();
  for (let i = 0; i < 5; i++) {
    enemyGenerator.createEnemy();
  }
  
}
//I need to refactor and find a better way to  do all of this