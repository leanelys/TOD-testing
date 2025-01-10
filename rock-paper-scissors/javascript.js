
function getComputerChoice() 
{
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) {
        return "Rock";
    }
    else if (choice == 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() 
{
    // lol error handling non-existent
    let userInput = prompt("Rock, Paper, or Scissors?");
    userInput = (userInput.charAt(0)).toUpperCase() + (userInput.substring(1, userInput.length));
    return userInput;
}

// function playRound(humanChoice, computerChoice) 
// {
//     // Tied
//     if (humanChoice == computerChoice) {
//         console.log(`It's a DRAW! You both picked ${humanChoice}.`);
//     }
//     // User wins
//     else if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")) {
//         console.log(`You WIN! ${humanChoice} beats ${computerChoice}.`);
//         humanScore++;
//     }
//     // Computer wins
//     else {
//         console.log(`You LOSE! ${computerChoice} beats ${humanChoice}.`);
//         computerScore++;
//     }
// }

function playGame() 
{
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    let humanScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}!`);
        
        // Tied
        if (humanChoice == computerChoice) {
            console.log(`It's a DRAW! You both picked ${humanChoice}.`);
        }
        // User wins
        else if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")) {
            console.log(`You WIN! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        }
        // Computer wins
        else {
            console.log(`You LOSE! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }

        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();        
    }

    if (humanScore > computerScore) {
        console.log(`You win!`);
    }
    else if (computerScore > humanScore) {
        console.log(`Computer wins!`);
    }
    else {
        console.log(`It's a tie!`);
    }
    console.log(`${humanScore} to ${computerScore}`);
}

playGame();