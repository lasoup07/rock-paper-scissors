function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) return "rock";
    if (randomNumber === 2) return "paper";
    return "scissors";
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?").toLowerCase();
}


function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice,computerChoice) {
        if (humanChoice === computerChoice)  {
            return "It's a tie!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            return "You win this round!";
        } else {
            return "Computer wins this round!"
        }
    }

    for (let round = 1; round <= 5; round++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(`Round ${round}`);
        console.log(`Human Choice: ${humanChoice}`);
        console.log(`Computer Choice: ${computerChoice}`);

        let result = playRound(humanChoice, computerChoice);
        console.log(result);

        if (result === "You win this round!") {
            humanScore++;
        } else if (result === "Computer wins this round!") {
            computerScore++;
        }

        console.log(`Scores after Round ${round}: Human ${humanScore} - Computer ${computerScore}`);
    }

    console.log("Final Result:");
    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`Computer wins the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    }
}

playGame();