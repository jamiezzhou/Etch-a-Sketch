let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "ROCK";
  } else if (choice === 1) {
    return "PAPER";
  } else if (choice === 2) {
    return "SCISSORS";
  }
}

function playOneRound(playerSelection, computerSelection) {
  let playerSelectionNew = playerSelection.toUpperCase();
  if (playerSelectionNew === computerSelection) {
    return "This is a TIE";
  } else if (
    (playerSelectionNew === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelectionNew === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelectionNew === "PAPER" && computerSelection === "ROCK")
  ) {
    playerWins++;
    return "You WIN";
  } else if (
    (computerSelection === "ROCK" && playerSelectionNew === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelectionNew === "PAPER") ||
    (computerSelection === "PAPER" && playerSelectionNew === "ROCK")
  ) {
    computerWins++;
    return "You LOSE";
  }
}

function game() {
  while (playerWins + computerWins < 5) {
    computerChoice = getComputerChoice();
    playerChoice = window.prompt("Rock Paper Scissors shoot!");
    console.log(playOneRound(playerChoice, computerChoice));
  }
  if (playerWins < computerWins) {
    console.log("You LOST!");
  } else {
    console.log("You WIN!");
  }
}
