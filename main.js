
//First setup a fonction that returns 1 value within the array randomly
function getComputerChoice(selection)
{
  
return selection [Math.floor(Math.random()*selection.length)];
     
}

const selection = ["Rock", "Paper", "Scissors"];


// Second write a fonction that plays 1 single round of RPS
function playRound(playerSelection, computerSelection) {
  // your code here!
  if (computerSelection === "Paper") {
    console.log("Computer wins") 
  }
  else if (computerSelection === "Scissors" ) {
    console.log("Player wins")
  }
  else {
    console.log("It's a draw")
  }
}
 
const playerSelection = "Rock";
const computerSelection = getComputerChoice(selection);
console.log(playRound(playerSelection, computerSelection));