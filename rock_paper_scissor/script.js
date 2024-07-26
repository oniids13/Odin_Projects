function getComputerChoice(){
    let computer_choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log(`Computer Choice: ${computer_choice}`);
    return computer_choice;
}

function getHumanChoice(){
    let human_choice = prompt("Pick your turn 1 - Rock, 2 - Paper, 3- Scissor. Number only");
    while (human_choice > 3 || human_choice < 1){
        human_choice = prompt("Pick your turn 1 - Rock, 2 - Paper, 3- Scissor. Number only");
    } 
    console.log(`Player Choice: ${human_choice}`);
    return +human_choice;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice ){
        console.log("Draw! Try Again.");
    }
    else if (humanChoice === 3 && computerChoice === 2){
        humanScore +=1;
        console.log("Player Wins! Scissor beats Paper");
    }
    else if (humanChoice === 2 && computerChoice === 1){
        humanScore +=1;
        console.log("Player Wins! Paper beats Rock");
    }
    else if (humanChoice === 1 && computerChoice === 3){
        humanScore +=1;
        console.log("Player Wins! Rock beats Scissors");
    } else{
        computerScore +=1;
        if (computerChoice === 1 && humanChoice === 3){
            console.log("Computer Wins! Rock beats Scissors");
        } else if (computerChoice === 2 && humanChoice === 1){
            console.log("Computer wins! Paper beats Rock.");
        } else {
            console.log("Computer wins! Scissors beats Paper");
        }
        
    }
    console.log(`Player Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
}

function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

let game_on = true;

while (game_on){
    playGame();
    if (humanScore === 5){
        game_on = false;
        console.log(`Player wins! Score: ${humanScore}`);
    }
    else if (computerScore === 5){
        game_on = false;
        console.log(`Computer wins! Score: ${computerScore}`);
    }
}




   

