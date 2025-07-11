function getComputerChoice() {
  let compChoice;
  let num = Math.floor(Math.random() * 3);
  num == 0
    ? (compChoice = "Rock")
    : num == 1
    ? (compChoice = "Paper")
    : (compChoice = "Scissors");
  return compChoice;
}

let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const choice = document.createElement("li");
const text = document.createElement("li");
const Score = document.createElement("li");
const list = document.querySelector("ul");

rock.addEventListener("click", () => {
  if (humanScore == 5 || computerScore == 5) {
    if (humanScore > computerScore) {
      alert("YOU WON!!");
      humanScore = 0;
      computerScore = 0;
    } else {
      alert("COMPUTER WON!!");
      humanScore = 0;
      computerScore = 0;
    }
  }
  const ROCK = "ROCK";
  playRound(ROCK, getComputerChoice);
});

paper.addEventListener("click", () => {
  if (humanScore == 5 || computerScore == 5) {
    if (humanScore > computerScore) {
      alert("YOU WON!!");
      humanScore = 0;
      computerScore = 0;
    } else {
      alert("COMPUTER WON!!");
      humanScore = 0;
      computerScore = 0;
    }
  }
  const PAPER = "PAPER";
  playRound(PAPER, getComputerChoice);
});

scissors.addEventListener("click", () => {
  if (humanScore == 5 || computerScore == 5) {
    if (humanScore > computerScore) {
      alert("YOU WON!!");
      humanScore = 0;
      computerScore = 0;
    } else {
      alert("COMPUTER WON!!");
      humanScore = 0;
      computerScore = 0;
    }
  }
  const SCISSORS = "SCISSORS";
  playRound(SCISSORS, getComputerChoice);
});

function playRound(humChoice, computerChoice) {
  compChoice = computerChoice();

  humChoice = humChoice.toUpperCase();
  compChoice = compChoice.toUpperCase();

  list.appendChild(choice);
  list.appendChild(text);
  list.appendChild(Score);

  if (compChoice === humChoice) {
    choice.textContent = `Computer Chose : ${compChoice}`;
    text.textContent = "its a tie both chose " + humChoice;
    Score.textContent = `You -  ${humanScore}   computer - ${computerScore} `;
  } else if (compChoice === "ROCK" && humChoice === "PAPER") {
    humanScore++;

    choice.textContent = `Computer Chose : ${compChoice}`;
    text.textContent = "You WON! Paper beats Rock !!";
    Score.textContent = `You -  ${humanScore}   computer - ${computerScore} `;
  } else if (compChoice === "ROCK" && humChoice === "SCISSORS") {
    computerScore++;

    choice.textContent = `Computer Chose : ${compChoice}`;
    text.textContent = "You LOST! Rock beats Scissors !!";
    Score.textContent = `You -  ${humanScore}   computer - ${computerScore} `;
  } else if (compChoice === "PAPER" && humChoice === "ROCK") {
    computerScore++;

    choice.textContent = `Computer Chose : ${compChoice}`;
    text.textContent = "You LOST! Paper beats Rock !!";
    Score.textContent = `You -  ${humanScore}   computer - ${computerScore} `;
  } else if (compChoice === "PAPER" && humChoice === "SCISSORS") {
    humanScore++;

    choice.textContent = `Computer Chose : ${compChoice}`;
    text.textContent = "You WON! Scissors beats Paper !!";
    Score.textContent = `You -  ${humanScore}   computer - ${computerScore} `;
  } else if (compChoice === "SCISSORS" && humChoice === "PAPER") {
    computerScore++;

    choice.textContent = `Computer Chose : ${compChoice}`;
    text.textContent = "You LOST! Scissors beats Paper !!";
    Score.textContent = `You -  ${humanScore}   computer - ${computerScore} `;
  } else if (compChoice === "SCISSORS" && humChoice === "ROCK") {
    humanScore++;
    choice.textContent = `Computer Chose : ${compChoice}`;
    text.textContent = "You WON! Rock beats Scissors !!";
    Score.textContent = `You -  ${humanScore}   computer - ${computerScore} `;
  }
}
