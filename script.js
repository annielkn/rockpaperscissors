const beats = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function getComputerChoice(){
    const choice = Math.random();
    if (choice < 0.33) return "rock";
    else if (choice > 0.66) return "paper";
    return "scissors";
}

function getHumanChoice(){
    let human = prompt("Enter choice here");
    return human;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let winner = "";

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase()
        if (humanChoice === computerChoice){
            return "Tie";
        }
        else if (humanChoice == beats[computerChoice]){
            computerScore += 1;
            return "Computer";
        }
        else{
            humanScore += 1;
            return "Human";
        }
    }

    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }

    if (humanScore = computerScore) winner = "Tie";
    else if (humanScore > computerScore) winner = "Human";
    else winner = "Computer";

    console.log(`Human: ${humanScore}, Computer: ${computerScore}, winner: ${winner}`)
}


playGame()