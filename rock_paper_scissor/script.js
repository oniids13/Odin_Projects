function getComputerChoice(){
    let computer_choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    switch (computer_choice){
        case 1:
            return "✊";
            break;
        case 2:
            return "✋";
            break;
        case 3:
            return "✌️";
            break;
    }
}



function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice ){
        result.style.color = "blue";
        result.textContent = "Draw! Try Again.";
    }
    else if (playerChoice === "✌️" && computerChoice === "✋"){
        playerScore +=1;
        result.style.color = "green"
        result.textContent = "Player Wins! Scissors beats Paper";
    }
    else if (playerChoice === "✋" && computerChoice === "✊"){
        playerScore +=1;
        result.style.color = "green"
        result.textContent = "Player Wins! Paper beats Rock";
    }
    else if (playerChoice === "✊" && computerChoice === "✌️"){
        playerScore +=1;
        result.style.color = "green"
        result.textContent = "Player Wins! Rock beats Scissors";
    } else{
        computerScore +=1;
        if (computerChoice === "✊" && playerChoice === "✌️"){
            result.style.color = "red"
            result.textContent = "Computer Wins! Rock beats Scissors";
        } else if (computerChoice === "✋" && playerChoice === "✊"){
            result.style.color = "red"
            result.textContent = "Computer wins! Paper beats Rock.";
        } else {
            result.style.color = "red"
            result.textContent = "Computer wins! Scissors beats Paper";
        }
        
    }
    container.append(score)
    score.textContent = `Player Score: ${playerScore} --- Computer Score: ${computerScore} `
}

function playGame(player_choice){
    switch(player_choice){
        case 0:
            player_choice = "✊";
            break;
        case 1:
            player_choice = "✋";
            break;
        case 2:
            player_choice = "✌️";
            break;
    }

    const playerSelection = player_choice;
    const computerSelection = getComputerChoice();


    body.appendChild(div);
    div.appendChild(player);
    div.appendChild(computer);
    div.appendChild(result);
    player.textContent = `Player Choice: ${playerSelection.toUpperCase()}`;
    computer.textContent = `Computer Choice: ${computerSelection.toUpperCase()}`;
    

    playRound(playerSelection, computerSelection);
}



let humanScore = 0;
let computerScore = 0;
let game_on = true;


const buttons = document.querySelectorAll("button");
let player_choice;

const container = document.querySelector('.container')
const div = document.createElement('div');
div.classList = "board";
const body = document.body;
const player = document.createElement("h2");
const computer = document.createElement("h2");
const result = document.createElement("h2");
const score = document.createElement("div");
score.classList = "score"
const resetButton = document.createElement("button");
resetButton.className = "reset";
resetButton.textContent = "Play Again";


let isGameOngoing = true;

for (let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', () =>{
        if (buttons[i].click){
            playGame(i);
            
        }
    })
}
   

