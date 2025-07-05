

function getComputerChoice() {
  let compChoice;
  let num = Math.floor(Math.random()*3);
  num == 0 ? compChoice="Rock" : num == 1 ? compChoice="Paper" : compChoice="Scissors" ;

  return compChoice;
}

function getHumanChoice() {
  let humChoice;
  humChoice = prompt("Rock or Paper or Scissors ?");
}





