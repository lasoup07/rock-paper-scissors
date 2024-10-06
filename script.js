function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) return "rock";
    if (randomNumber === 2) return "paper";
    return "scissors";
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?").toLowerCase();
}

let humanScore = 0
let computerScore = 0

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(`Human Choice: ${humanChoice}`);
console.log(`Computer Choice: ${computerChoice}`)

function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice)  {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!"
    }
}

console.log(playRound(humanChoice, computerChoice));
console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);