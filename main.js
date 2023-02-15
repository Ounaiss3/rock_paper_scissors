
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

//function getPlayerChoice() {
    
    //let choice = prompt("Choose Rock, Paper or Scissors")
      //  return choice
//}

//Third write a function that plays 5 rounds, keeps score and report winner or loser
 function game(playRound) {
    for (let i = 0; i < 5; i++) {
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
 }
