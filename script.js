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
    const maxX = window.innerWidth - 500; 
    const maxY = window.innerHeight - 500; 
    const x = Math.max(0, Math.floor(Math.random() * maxX));
    const y = Math.max(0, Math.floor(Math.random() * maxY));
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
    enemy.style.left = x + "px";
    enemy.style.top = y + "px";
    points++;
    this.removeEnemy(enemy);
  },

  handleEnemyMousemove: function (enemy) {
    const maxX = window.innerWidth - 400; 
    const maxY = window.innerHeight - 400; 
    const x = Math.max(0, Math.floor(Math.random() * maxX));
    const y = Math.max(0, Math.floor(Math.random() * maxY));
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
      let hexRedColor = 150
      this.displayElement.style.color = `rgb(${hexRedColor},0,0)`; // Bright red color
      hexRedColor += 10
    }
  },

  endGame: function () {
    clearInterval(this.intervalId);
    endGameMessage();
  },
};

const showScore = ()=> {
  const pointsDisplay = document.getElementById("points");

  setInterval(() => {
    pointsDisplay.textContent = `Points: ${points}`;
    setLocalStorage();
    //changRootVariable();
  }, 1000);
}
const endGameMessage =()=>{
 let messageEndGame = document.getElementById('dialogPop')
 let pointsShow = document.getElementById("pointsShow")
 pointsShow.textContent = points
 messageEndGame.show()
}

const closeModal =()=>{
  let closeModal = document.querySelector(".btn")
  closeModal.addEventListener("click", ()=>{
    messageEndGame.hide()
  })
}
const generateRandomHexColor =()=> {
  let hexColor = "#";
  hexColor += Math.floor(Math.random() * 16777215).toString(16);

  return hexColor;
}
const setLocalStorage =()=> {
  let displayMaxScore = document.getElementById("maxPoints");
  let higherScore = parseInt(localStorage.getItem("higherScore")) || 0;
  displayMaxScore.innerHTML = `Max Score : ${higherScore}`;

  if (points > higherScore) {
    higherScore = points;
    localStorage.setItem("higherScore", higherScore);
  }

  return higherScore;
}
const changRootVariable =()=> {
  let rootCss = document.querySelector(":root");
  rootCss.style.setProperty("--Main--Color", generateRandomHexColor());
}
const verifyEnemyQuantity =()=> {
  const enemyElements = document.getElementsByClassName("personalEnemy");
  if (enemyElements.length === 0) {
    alert("You cleared the game!");
  }
}
const startGame =()=> {
  showScore();
  timer.start();
  for (let i = 0; i < 5; i++) {
    enemyGenerator.createEnemy();
  }
  
}
