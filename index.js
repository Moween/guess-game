const rockbtn = document.querySelector('#rock')
const paperbtn = document.querySelector('#paper')
const scissorsbtn = document.querySelector('#scissors')
const result = document.querySelector('#result');
const refreshBtn = document.getElementById('refresh')


//Array to pick item from.
const myArray = ["rock", "paper", "scissors"];

//result array
const winningWeapons = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

//variable to increment scores 
let playerScore = 0;
let computerScore = 0;




// Computer Play Function
function computerPlay() {
  return myArray[Math.floor(Math.random() * myArray.length)];  
}



function playRound(e) {  
  e.preventDefault();
  e.stopPropagation(); 
  
  
  //Computer Plays
  let computerSelection = computerPlay();

  //Player Plays
  playerSelection = e.target.id;
  
  //Checking for winner
  if(playerSelection !== computerSelection) {
    let playerWin = false;
    for (const weapon in winningWeapons) {
      if(playerSelection === weapon && computerSelection === winningWeapons[weapon]) {
        playerScore += 10;
        playerWin = true;
        break;
      }      
    }
    
    if(!playerWin) {
      computerScore += 10;
    }
    
  }
  if(playerSelection === computerSelection) {
    computerScore += 10;
    playerScore += 10;
  }
  
  return winner();
}


let resultbtn = document.createElement('button');
function winner() {
  if(playerScore > computerScore) {
    document.getElementById('player').textContent = `${playerScore} points!`;
    document.getElementById('comp').textContent = `${computerScore} points!`;
    result.appendChild(resultbtn);
    return resultbtn.innerHTML = `You win &#128514;!`;
  }else if(playerScore === computerScore){
    document.getElementById('comp').textContent = `${computerScore} points!`;
    document.getElementById('player').textContent = `${playerScore} points!`;
    result.appendChild(resultbtn);
    return resultbtn.innerHTML = "It's a tie!";
  }else {
    document.getElementById('comp').textContent = `${computerScore} points!`;
    document.getElementById('player').textContent = `${playerScore} points!`;
    result.appendChild(resultbtn);
    return resultbtn.innerHTML = `You lose &#128546;!`;
    
  }
  
}


function refreshGame() {
  location.reload();
}




//Add EventListeners
rockbtn.addEventListener('click', playRound);
scissorsbtn.addEventListener('click', playRound);
paperbtn.addEventListener('click', playRound);
refreshBtn.addEventListener('click', refreshGame);