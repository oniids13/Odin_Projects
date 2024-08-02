function getComputerChoice(){
    let computer_choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    switch (computer_choice){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}



function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice ){
        console.log("Draw! Try Again.");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore +=1;
        console.log("Player Wins! Scissors beats Paper");
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore +=1;
        console.log("Player Wins! Paper beats Rock");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore +=1;
        console.log("Player Wins! Rock beats Scissors");
    } else{
        computerScore +=1;
        if (computerChoice === "rock" && humanChoice === "scissors"){
            console.log("Computer Wins! Rock beats Scissors");
        } else if (computerChoice === "paper" && humanChoice === "rock"){
            console.log("Computer wins! Paper beats Rock.");
        } else {
            console.log("Computer wins! Scissors beats Paper");
        }
        
    }
    console.log(`Player Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
}

function playGame(human_choice){
    switch(human_choice){
        case 0:
            human_choice = "rock";
            break;
        case 1:
            human_choice = "paper";
            break;
        case 2:
            human_choice = "scissors";
            break;
    }

    const humanSelection = human_choice;
    const computerSelection = getComputerChoice();
    container.appendChild(div);
    div.textContent = `Player Choice: ${humanSelection} Computer Choice: ${computerSelection}`
    playRound(humanSelection, computerSelection);
}



let humanScore = 0;
let computerScore = 0;
let game_on = true;

// while (game_on){
//     playGame(humanChoice);
//     if (humanScore === 5){
//         game_on = false;
//         console.log(`Player wins! Score: ${humanScore}`);
//     }
//     else if (computerScore === 5){
//         game_on = false;
//         console.log(`Computer wins! Score: ${computerScore}`);
//     }
// }

const buttons = document.querySelectorAll("button");
let human_choice;

const container = document.querySelector('.container')
const div = document.createElement('div');
const body = document.body;



for (let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', () =>{
        if (buttons[i].click){
            playGame(i);
            
        }
    })
}
   

