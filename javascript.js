function getComputerChoice() {
  let compChoice;
  let num = Math.floor(Math.random() * 3);
  num == 0
    ? (compChoice = "Rock")
    : num == 1
    ? (compChoice = "Paper")
    : (compChoice = "Scissors");

  alert("Computer chose " + compChoice);
  return compChoice;
}

function getHumanChoice() {
  let humChoice;
  humChoice = prompt("Rock or Paper or Scissors ?");
  alert("You chose " + humChoice);
  return humChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let humChoice = humanChoice();
  let compChoice = computerChoice();

  humChoice = humChoice.toUpperCase();
  compChoice = compChoice.toUpperCase();

  if (compChoice === humChoice) {
    alert("its a tie both chose " + humChoice);
    alert("Score : You - " + humanScore + " Computer - " + computerScore);
  } else if (compChoice === "ROCK" && humChoice === "PAPER") {
    humanScore++;
    alert("You WON! Paper beats Rock !!");
    alert("Score : You - " + humanScore + " Computer - " + computerScore);
  } else if (compChoice === "ROCK" && humChoice === "SCISSORS") {
    computerScore++;
    alert("You LOST! Rock beats Scissors !!");
    alert("Score : You - " + humanScore + " Computer - " + computerScore);
  } else if (compChoice === "PAPER" && humChoice === "ROCK") {
    computerScore++;
    alert("You LOST! Paper beats Rock !!");
    alert("Score : You - " + humanScore + " Computer - " + computerScore);
  } else if (compChoice === "PAPER" && humChoice === "SCISSORS") {
    humanScore++;
    alert("You WON! Scissors beats Paper !!");
    alert("Score : You - " + humanScore + " Computer - " + computerScore);
  } else if (compChoice === "SCISSORS" && humChoice === "PAPER") {
    computerScore++;
    alert("You LOST! Scissors beats Paper !!");
    alert("Score : You - " + humanScore + " Computer - " + computerScore);
  } else if (compChoice === "SCISSORS" && humChoice === "ROCK") {
    humanScore++;
    alert("You WON! Rock beats Scissors !!");
    alert("Score : You - " + humanScore + " Computer - " + computerScore);
  }
}
let number = +prompt("Enter the number of rounds you want to play the game");

function playGame(number) {
  for (let i = 0; i < number; i++) {
    playRound(getHumanChoice, getComputerChoice);
  }
}

playGame(number);
