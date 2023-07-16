let points = 0;
const enemyGenerator = {
  enemyGroup: ["Slime.gif", "SlimeDark.gif", "SlimeVolcano.gif"],
<<<<<<< HEAD
=======
  death: "deathSlime.gif",
>>>>>>> slimeMain

  createEnemy: function () {
    const randomEnemyChoose = this.getRandomEnemy();
    const newEnemy = this.createEnemyElement();
    const [x, y] = this.getRandomPosition();
<<<<<<< HEAD
    this.setPosition(newEnemy, x, y);
=======
    this.setPosition(newEnemy, x, y, true);
>>>>>>> slimeMain
    this.addEventHandlers(newEnemy);
    this.appendEnemyToDOM(newEnemy, randomEnemyChoose);
    console.log("Generated");
  },
<<<<<<< HEAD
  getRandomPosition: function () {
    const maxX = window.innerWidth - 500; 
    const maxY = window.innerHeight - 500; 
=======

  getRandomPosition: function () {
    const maxX = window.innerWidth - 500;
    const maxY = window.innerHeight - 500;
>>>>>>> slimeMain
    const x = Math.max(0, Math.floor(Math.random() * maxX));
    const y = Math.max(0, Math.floor(Math.random() * maxY));
    return [x, y];
  },
<<<<<<< HEAD
  
  setPosition: function (enemy, x, y) {
    enemy.style.left = x + "px";
    enemy.style.top = y + "px";
=======

  setPosition: function (enemy, x, y, slide = false) {
    if (slide) {
      const startX = x - 50; // Starting position to the left of the original point
      const endX = x + 50; // Ending position to the right of the original point
      const archHeight = 50; // Height of the arch

      const archX = (startX + endX) / 2; // X-coordinate of the arch peak
      const archY = y - archHeight; // Y-coordinate of the arch peak

      const duration = 1000; // Duration of the sliding animation in milliseconds
      const startTime = performance.now();

      const animate = (timestamp) => {
        const progress = timestamp - startTime;
        const ratio = Math.min(progress / duration, 1);

        // Apply sliding animation using a quadratic easing function (smooth arch shape)
        const positionX = startX + (archX - startX) * ratio;
        const positionY = archY + (y - archY) * (1 - Math.pow(1 - ratio, 2));

        enemy.style.left = positionX + "px";
        enemy.style.top = positionY + "px";

        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    } else {
      enemy.style.left = x + "px";
      enemy.style.top = y + "px";
    }
>>>>>>> slimeMain
  },

  removeEnemy: function (enemy) {
    enemy.remove();
  },
<<<<<<< HEAD
=======

>>>>>>> slimeMain
  getRandomEnemy: function () {
    return this.enemyGroup[Math.floor(Math.random() * this.enemyGroup.length)];
  },

  createEnemyElement: function () {
    const newEnemy = document.createElement("div");
    newEnemy.classList.add("personalEnemy");
    return newEnemy;
  },

  addEventHandlers: function (enemy) {
<<<<<<< HEAD
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
=======
    enemy.addEventListener("click", (event) => this.handleEnemyClick(event));
    enemy.addEventListener("mousemove", () => this.handleEnemyMousemove(enemy));
  },

  handleEnemyClick: function (event) {
    const enemy = event.currentTarget;
    const [x, y] = this.getPosition(enemy);

    if (enemy.classList.contains("main-enemy")) {
      // Generate two smaller enemies (clones) only if the enemy is the main enemy
      const clones = this.generateClones(x, y, 2);
      // Increase points
      points++;
    } else {
      const deathImage = this.death;
      if (deathImage) {
        // Change the image of the clicked slime enemy to the death image
        this.changeEnemyImage(enemy, deathImage);
        // Increase points
        points++;
        // Remove the enemy after a delay
        setTimeout(() => {
          this.removeEnemy(enemy);
        }, 1000);
      }
    }
  },

  changeEnemyImage: function (enemy, newImage) {
    const imageElement = enemy.querySelector("img");
    if (imageElement) {
      imageElement.src = `img/${newImage}`;
    }
  },

  generateClones: function (x, y, count) {
    const clones = [];

    for (let i = 0; i < count; i++) {
      const clone = this.createEnemyElement();
      clone.classList.add("clone");
      const [cloneX, cloneY] = this.getRandomPositionAround(x, y);
      this.setPosition(clone, cloneX, cloneY, true); // Apply sliding animation for clones
      this.addEventHandlers(clone);
      this.appendEnemyToDOM(clone, this.getRandomEnemy());
      clones.push(clone);
    }

    return clones;
  },

  getRandomPositionAround: function (x, y) {
    const offsetX = Math.floor(Math.random() * 100) - 50;
    const offsetY = Math.floor(Math.random() * 100) - 50;
    const newX = x + offsetX;
    const newY = y + offsetY;
    return [newX, newY];
  },

  getPosition: function (enemy) {
    const x = parseInt(enemy.style.left);
    const y = parseInt(enemy.style.top);
    return [x, y];
  },

  handleEnemyMousemove: function (enemy) {
    const maxX = window.innerWidth - 900;
    const maxY = window.innerHeight - 900;
>>>>>>> slimeMain
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
<<<<<<< HEAD

=======
>>>>>>> slimeMain
      if (this.duration > 0) {
        this.duration--;
        this.updateDisplay();
      } else {
        this.endGame();
      }
    }, 1000);
  },

<<<<<<< HEAD
  updateDisplay: function () {
    this.displayElement.textContent = this.duration;
    if (this.duration <= 10) {
      let hexRedColor = 150
      this.displayElement.style.color = `rgb(${hexRedColor},0,0)`; // Bright red color
      hexRedColor += 10
=======
  stop: function () {
    clearInterval(this.intervalId);
  },

  restart: function () {
    this.stop();
    this.duration = parseInt(this.displayElement.textContent);
    this.start();
  },

  updateDisplay: function () {
    this.displayElement.textContent = this.duration;
    if (this.duration <= 10) {
      let hexRedColor = 150;
      this.displayElement.style.color = `rgb(${hexRedColor},0,0)`; // Bright red color
      hexRedColor += 10;
>>>>>>> slimeMain
    }
  },

  endGame: function () {
    clearInterval(this.intervalId);
    endGameMessage();
  },
};

<<<<<<< HEAD
function showScore() {
=======
const showScore = ()=> {
>>>>>>> slimeMain
  const pointsDisplay = document.getElementById("points");

  setInterval(() => {
    pointsDisplay.textContent = `Points: ${points}`;
    setLocalStorage();
<<<<<<< HEAD
    changRootVariable();
  }, 1000);
}
function endGameMessage() {
=======
    //changRootVariable();
  }, 1000);
}
const endGameMessage =()=>{
>>>>>>> slimeMain
 let messageEndGame = document.getElementById('dialogPop')
 let pointsShow = document.getElementById("pointsShow")
 pointsShow.textContent = points
 messageEndGame.show()
}

<<<<<<< HEAD
function closeModal(){
  let closeModal = document.querySelector(".btn")
  closeModal.addEventListener("click", ()=>{
    messageEndGame.hide()
  })
}
function generateRandomHexColor() {
=======
const closeModal =()=>{
  let messageEndGame = document.getElementById('dialogPop')
 messageEndGame.close()
}
const generateRandomHexColor =()=> {
>>>>>>> slimeMain
  let hexColor = "#";
  hexColor += Math.floor(Math.random() * 16777215).toString(16);

  return hexColor;
}
<<<<<<< HEAD
function setLocalStorage() {
=======
const setLocalStorage =()=> {
>>>>>>> slimeMain
  let displayMaxScore = document.getElementById("maxPoints");
  let higherScore = parseInt(localStorage.getItem("higherScore")) || 0;
  displayMaxScore.innerHTML = `Max Score : ${higherScore}`;

  if (points > higherScore) {
    higherScore = points;
    localStorage.setItem("higherScore", higherScore);
  }

  return higherScore;
}
<<<<<<< HEAD
function changRootVariable() {
  let rootCss = document.querySelector(":root");
  rootCss.style.setProperty("--Main--Color", generateRandomHexColor());
}
function verifyEnemyQuantity() {
=======
const changRootVariable =()=> {
  let rootCss = document.querySelector(":root");
  rootCss.style.setProperty("--Main--Color", generateRandomHexColor());
}
const verifyEnemyQuantity =()=> {
>>>>>>> slimeMain
  const enemyElements = document.getElementsByClassName("personalEnemy");
  if (enemyElements.length === 0) {
    alert("You cleared the game!");
  }
}
<<<<<<< HEAD
function startGame() {
  showScore();
  timer.start();
  for (let i = 0; i < 5; i++) {
    enemyGenerator.createEnemy();
  }
  
}
=======
const startGame =()=> {
  const mainEnemy = enemyGenerator.createEnemy();
  showScore();
  timer.start();
  mainEnemy.classList.add("main-enemy");
  dialogTime.close();
}

document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("clone")) {
    // Remove the clicked clone
    enemyGenerator.removeEnemy(target);
  }
});

const restartGame = () => {
  // Reset the timer
  timer.stop();
  timer.duration = 30;

  // Reset the score
  points = 0;
  showScore();

  // Remove existing enemies
  const enemies = document.querySelectorAll(".personalEnemy");
  enemies.forEach((enemy) => {
    enemy.remove();
  });

  // Generate new enemies
  for (let i = 0; i < 5; i++) {
    enemyGenerator.createEnemy();
  }

  // Start the timer
  timer.start();
  
    const dialog = document.getElementById("dialogPop");
    const dialogTime = document.querySelector("#dialogPop_menu");
    dialogTime.classList.remove("time_modal")
    dialogTime.close();
    dialog.close();
 
};

//Manage the time tab
document.addEventListener("keydown", function (event) {
  const dialog = document.querySelector("#dialogPop_menu");
  if (event.key === "ArrowDown") {
    dialog.classList.remove("apperence");
    dialog.showModal();
  }
  if(event.key === "ArrowUp") {
    dialog.classList.add("apperence")
    dialog.close();
  }

  console.log(event.key)
});

>>>>>>> slimeMain
