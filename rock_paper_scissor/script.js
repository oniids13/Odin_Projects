function getComputerChoice(){
    let computer_choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log(computer_choice);
    return computer_choice;
}

function getHumanChoice(){
    let human_choice = prompt("Pick your turn 1 - Rock, 2 - Paper, 3- Scissor. Number only");
    console.log(human_choice);
    return +human_choice;

}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice ){
        console.log("Draw! Try Again.")
    }
    else if (humanChoice === 3 && computerChoice === 2){
        humanScore +=1;
        console.log("Player Wins! Scissor beats Paper")
    }
    else if (humanChoice === 2 && computerChoice === 1){
        humanScore +=1;
        console.log("Player Wins! Paper beats Rock")
    }
    else if (humanChoice === 1 && computerChoice === 3){
        console.log("Player Wins! Rock beats Scissors")
    } else{
        computerScore +=1;
        console.log("Computer Wins!")
    }
    
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);