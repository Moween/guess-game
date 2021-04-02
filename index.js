//Array to pick item from.
const myArray = ["rock", "paper", "scissors"];

// Computer
function computerPlay() {
  return myArray[Math.floor(Math.random() * myArray.length)];  
}

// player
const playerPlay = () => {
  let playerSelection = prompt('Pick one:\nRock, Paper, Scissors').toLowerCase();
  while(!myArray.includes(playerSelection)) {
    alert('Invalid input, try again!');
    playerSelection = prompt('Pick one:\nRock, Paper, Scissors').toLowerCase();
  }
  return playerSelection ;
}


//Round one
function playRound(computerSelection, playerSelection) {
  //variable to increment scores
  let playerScore = 0;
  let computerScore = 0;
  let computerTurn;
  let playerTurn;
  
  computerTurn = computerSelection();
  playerTurn = playerSelection()
  
  console.log(computerTurn);
  console.log(playerTurn);


  //LOGIC
  if (computerTurn === playerTurn) {
    console.log("It's a tie!");
  }else if (
    (computerTurn === 'paper' && playerTurn === 'rock') || 
    (computerTurn === 'scissors' && playerTurn === 'paper') || 
    (computerTurn === 'rock' && playerTurn === 'scissors')) 
  {
    computerScore += 10;
    return ("Game Over\nComputer's score: " +  computerScore  + "\nPlayer's score: " +  playerScore + " \nYou Lose!"); 
  }else if (
    (computerTurn === 'scissors' && playerTurn === 'rock') ||
    (computerTurn === 'rock' && playerTurn === 'paper') || 
    (computerTurn === 'paper' && playerTurn === 'scissors'))
  {
    playerScore += 10;
    return ("Game Over\nComputer's score: " + computerScore + "\nPlayer's score: " + playerScore +" \nYou win!");    
  }

}
console.log(playRound(computerPlay, playerPlay));  //Should output a string of who won and who lost.
