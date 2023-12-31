function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0){
        computerSelection = "rock"
    } else if (randomNumber === 1){
        computerSelection = "paper"
    } else {
        computerSelection = "scissor"
    }
}

function getPlayerSelection(){
    playerSelection = prompt("Select wisefully").toLowerCase();
    return playerSelection;
}  

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === "rock"){
        return "It's a draw"
    } else if (playerSelection === "rock" && computerSelection === "scissor"){
        winCount++;
        return `You Win! ${playerSelection} beats ${computerSelection}`                
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        lossCount++;
        return `You loose! ${computerSelection} beats ${playerSelection}`        
    } else if(playerSelection === "scissor" && computerSelection === "scissor"){
        return "It's a draw"
    } else if (playerSelection === "scissor" && computerSelection === "paper"){
        winCount++;
        return `You Win! ${playerSelection} beats ${computerSelection}`        
    } else if (playerSelection === "scissor" && computerSelection === "rock"){
        lossCount++;
        return `You loose! ${computerSelection} beats ${playerSelection}`        
    } else if(playerSelection === "paper" && computerSelection === "paper"){
        return "It's a draw"
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        winCount++;
        return `You Win! ${playerSelection} beats ${computerSelection}`        
    } else if (playerSelection === "paper" && computerSelection === "scissor"){
        lossCount++;
        return `You loose! ${computerSelection} beats ${playerSelection}`        
    }
}


function playGame(event) {
    playerSelection = event.target.textContent.toLowerCase();
    getComputerChoice();
    roundResult.textContent = playRound(playerSelection, computerSelection);
    if(winCount >= 5){
        alert("You've won");
        winCount = 0;
        lossCount = 0;
    } else if (lossCount >= 5){
        alert("You lost! Try again");
        winCount = 0;
        lossCount = 0;
    } 
    totalWins.textContent = winCount.toString();
    totalLosses.textContent = lossCount.toString();

//    console.log(computerSelection);
//    console.log(playerSelection);
//    console.log("you've won this many times " + winCount);
//    console.log("you've lost this many times " + lossCount);
}


let playerSelection;
let computerSelection;
let winCount = 0;
let lossCount = 0;
const roundResult = document.querySelector(".roundResult");
const totalWins = document.querySelector(".totalWins");
const totalLosses = document.querySelector(".totalLosses");



const selections = document.querySelectorAll(".selection");
selections.forEach(selection => {
    selection.addEventListener('click', playGame)
});








/* 
function game(){
    for (let i = 0; i<5; i++){
        getPlayerSelection();
        getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
    if(winCount>lossCount){
        console.log("You win");
    } else if(lossCount>winCount){
        console.log("You lose");
    } else {
        console.log("It's a draw, try again");
    }
} 

game();
*/