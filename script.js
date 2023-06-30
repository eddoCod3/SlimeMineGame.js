
// function enemyPosition(){
//     let enemy = document.getElementById("enemy");
//     let x = Math.floor(Math.random() * 600);
//     let y = Math.floor(Math.random() * 600);
//     enemy.style.left = x + "px";
//     enemy.style.top = y + "px";
//     enemy.style.position= "relative";
    
// }
let points = 0
function createEnemy(){
  
    let enemyGroup = ["Slime.gif","SlimeDark.gif","SlimeVolcano.gif",]
    let randomEnemyChoose = enemyGroup[Math.floor(Math.random() * enemyGroup.length)];
    let imageEnemy = document.createElement("img");
    let newEnemy = document.createElement("div");

    newEnemy.classList.add("personalEnemy");
    newEnemy.onclick = function(){
        let x = Math.floor(Math.random() * 400);
        let y = Math.floor(Math.random() * 400);
        this.style.left = x + "px";
        this.style.top = y + "px";
        this.style.position= "absolute";
        points++
        
    }
    imageEnemy.src = `img/${randomEnemyChoose}`;
    newEnemy.append(imageEnemy)
    document.body.appendChild(newEnemy);
    console.log("Generated")
    
}


function endGameTimer(){
    let timer = 30
    let timerDisplay= document.getElementById("timer");
    timerDisplay.textContent= timer

    setInterval(()=>{
        if(timer != 0){
            timer--
            timerDisplay.textContent= timer
        }else{
            timer
            endGameMessage()
            
        }
    },1000)

    
   
}

function generatedEnemies(){

    for (let i = 0; i < 5; i++) {
            createEnemy()
    }
}

function showScore(){
  
  let pointsDisplay = document.getElementById("points")
  pointsDisplay.textContent = points
}

function startGame(){
  
    endGameTimer();
    generatedEnemies();
}



function endGameMessage(){
    alert(`Game over  your points:${points}`)
}