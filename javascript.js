function getComputerChoice() {
  let compChoice;
  let num = Math.floor(Math.random() * 3);
  num == 0
    ? (compChoice = "Rock")
    : num == 1
    ? (compChoice = "Paper")
    : (compChoice = "Scissors");

  console.log("Computer chose " + compChoice);
  return compChoice;
}

function getHumanChoice() {
  let humChoice;
  humChoice = prompt("Rock or Paper or Scissors ?");
  console.log("You chose " + humChoice);
  return humChoice;
}

let humanScore = 0;
let ComputerScore = 0;

function playRound(humanChoice, computerChoice) {
  let humChoice = humanChoice();
  let compChoice = computerChoice();

  humChoice = humChoice.toUpperCase();
  compChoice = compChoice.toUpperCase();

  if (compChoice === humChoice) {
    console.log("its a tie both chose " + humChoice);
  } else if (compChoice === "ROCK" && humChoice === "PAPER") {
    console.log("You WON! Paper beats Rock !!");
  } else if (compChoice === "ROCK" && humChoice === "SCISSORS") {
    console.log("You LOST! Rock beats Scissors !!");
  } else if (compChoice === "PAPER" && humChoice === "ROCK") {
    console.log("You LOST! Paper beats Rock !!");
  } else if (compChoice === "PAPER" && humChoice === "SCISSORS") {
    console.log("You WON! Scissors beats Paper !!");
  } else if (compChoice === "SCISSORS" && humChoice === "PAPER") {
    console.log("You LOST! Scissors beats Paper !!");
  } else if (compChoice === "SCISSORS" && humChoice === "ROCK") {
    console.log("You WON! Rock beats Scissors !!");
  }
}
