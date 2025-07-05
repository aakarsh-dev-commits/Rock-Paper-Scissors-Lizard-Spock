function getComputerChoice() {
  let num = Math.floor(Math.random()*3);
  num == 0 ? console.log("Rock") : num == 1 ? console.log("Paper") : console.log("Scissors") ;
}
