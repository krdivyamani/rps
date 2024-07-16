let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

document.querySelector("#win-message").textContent = "Can you beat the Computer?";
document.querySelector("#round").textContent = roundCount;
document.querySelector("#computerScore").textContent = computerScore;
document.querySelector("#playerScore").textContent = playerScore;

//to capitalise the first letter of the output
function capitalize(choice){
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function computerPlay(){
    let choices = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Main Game-Play
function playRound(humanChoice, computerChoice){
    var playerWin = 'You Win! ' + capitalize(humanChoice) + ' Beats ' + capitalize(computerChoice) + '.';
    var computerWin = 'You Lose! ' + capitalize(computerChoice) + ' Beats ' + capitalize(humanChoice) + '.';
    var gameTie = 'Its a Draw! You both chose ' + capitalize(humanChoice);
    if (humanChoice == computerChoice){
        return gameTie;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissor') ||
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissor' && computerChoice === 'paper')){
            playerScore += 1;
            return playerWin;
    } else{
    computerScore += 1;
    return computerWin;
    }
}

// Play the Game until playerScore == 5 OR computerScore == 5
function game(humanChoice){
    if (playerScore < 5 && computerScore < 5){
        const computerChoice = computerPlay();
        gameMessage = playRound(humanChoice, computerChoice);
        document.querySelector("#win-message").textContent = gameMessage;
        document.querySelector("#playerScore").textContent = playerScore;
        document.querySelector("#computerScore").textContent = computerScore;
    }

    if (playerScore == 5){
        document.querySelector("#win-message").textContent = "You beat the Computer!";
        document.querySelector("#win-message").setAttribute('style', 'color: green;');
    }
    if (computerScore == 5){
        document.querySelector("#win-message").textContent = "Beep Boop! The Computer Wins the Game!";
        document.querySelector("#win-message").setAttribute('style','color: red;');
    }
}


let rockbtn = document.querySelector("#rock-btn");
let paperbtn = document.querySelector("#paper-btn");
let scissorbtn = document.querySelector("#scissor-btn");
let resetbtn = document.querySelector("#reset-btn");


// Event Listener for the buttons
rockbtn.addEventListener('click', () => {
    game('rock');
});
paperbtn.addEventListener('click', () => {
    game('paper');
});
scissorbtn.addEventListener('click', () => {
    game('scissor');
});


// The reset button clears the gameboard
resetbtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    document.querySelector("#win-message").setAttribute('style', 'color: black;');
    document.querySelector("#round").textContent = roundCount;
    document.querySelector("#playerScore").textContent = playerScore;
    document.querySelector("#computerScore").textContent = computerScore;
    document.querySelector("#win-message").textContent = "Can you beat the Computer?";
});