class Player {
    constructor(
        playerOption    // Human or CPU
    ) {
        this.playerOption
    }
}

class HumanPlayer extends Player {
    constructor(
        playerOption
    ) {
        super(
            "PlayerController"
        )
    }
}

class ComputerPlayer extends Player {
    constructor(
        playerOption
    ) {
        super(
            "ComputerController"
        )
    }
}

class Game {
    // static roundCount = 0
    // static winCounter = 5

    constructor (
        roundCount,
        winCounter,

    ) {}
}

const { platform } = require('os');
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

// Main async function
const main = async () => {
    console.log(`\nWelcome to Rock Paper Scissors`);
    gameInPlay = true
    
    while (gameInPlay = true) {
        let playerSelectLoop = false
        while (playerSelectLoop == false) {
            let gameSelect = await askQuestion(`Will you be playing against the [C]omputer or against a [H]uman?\n`);
            gameSelect = gameSelect.toLowerCase()
            if (gameSelect == 'c') {
                console.log('\nYou wish to play against me?\nGood Luck!\n');
                playerSelectLoop = true
            } else if (gameSelect == 'h') {
                console.log(`\nThis feature has not been unlocked yet!\n`)
            }
        }

        let roundSelectLoop = false
        let roundCounter = ``
        while (roundSelectLoop == false) {
            roundCounter = await askQuestion('How many rounds are you playing?\nNo more than 10 please!\n');
            roundCounter = strToInt(roundCounter)
            if (roundCounter >= 1 && roundCounter <= 10) {
                console.log(`Let's play ${roundCounter} rounds\n`);
                roundSelectLoop = true;
            } else if (roundCounter > 10) {
                console.log("Less than 10 please!\n");
            } else if (roundCounter < 1) {
                console.log("We have to play at least 1 round\n");
            } else if (!isNaN(roundCounter)) {
                console.log('Please enter a number\n');
            }
        }
        let currentRound    = 0
        let winCounter      = 0
        let loseCounter     = 0
        let drawCounter     = 0
        while (currentRound < roundCounter) {
            currentRound++
            console.log(`Round ${currentRound} of ${roundCounter}`);

            // User plays their hand using await
            let playerRPS = await askQuestion('[1] Rock, [2] Paper, [3] Scissors:  ');
            playerRPS = strToInt(playerRPS);playerRPS = digitToRPS(playerRPS)

            let cpuRPS = digitToRPS(roll())

            console.log(`Your ${playerRPS} vs. my ${cpuRPS}`);
            if ((playerRPS == 'rock' && cpuRPS == 'scissors') || (playerRPS == 'paper' && cpuRPS == 'rock') || (playerRPS == 'scissors' && cpuRPS == 'paper')) {
                console.log(`${playerRPS} beats ${cpuRPS}, You won!`);
                winCounter++
            } else if ((playerRPS == 'rock' && cpuRPS == 'paper') || (playerRPS == 'paper' && cpuRPS == 'scissors') || (playerRPS == 'scissors' && cpuRPS == 'paper')) {
                console.log(`${playerRPS} loses to ${cpuRPS}, You lost :(`);
                loseCounter++
            } else if (cpuRPS == playerRPS) {
                console.log(`Draw game!`);
                drawCounter++
            }
            if (currentRound != roundCounter) {
                console.log(`The current score is Won: ${winCounter}, Lost: ${loseCounter}, Drew: ${drawCounter}\n`);
            } else {
                if (winCounter > loseCounter) {
                    console.log(`Player1 won with ${winCounter} wins, ${loseCounter} losses, and ${drawCounter} draws\n`);
                } else if (winCounter < loseCounter) {
                    console.log(`Player1 lost with ${winCounter} wins, ${loseCounter} losses, and ${drawCounter} draws\n`)
                } else {
                    console.log(`Stalemate! ${winCounter} wins, ${loseCounter} losses, and ${drawCounter} draws\n`)
                }
                let playAgain = await askQuestion('Would you like to play again?\n[y]es or [n]o\n');
                playAgain = playAgain.toLowerCase()
                if (playAgain == 'y') {
                    console.log(`Let's go again\n`);
                    gameInPlay = false
                } else if (playAgain == 'n') {
                    console.log(`\nGood Game!\n`);
                    rl.close();
                }
            }
        }
    }
};

// Call the main async function
main();

function roll () {
    const now = new Date();
    const rps = now.getMilliseconds()
    if (rps < 333) {
        return 1
    } else if (rps > 666 ) { 
        return 2
    } else {
        return 3
    }
}

function digitToRPS (int) {
    int = strToInt(int)
    if (int == 1) {
        return 'rock'
    } else if (int == 2) {
        return 'paper'
    } else if (int == 3) {
        return 'scissors'
    }
}

function strToInt (str) {
    return parseInt(str,10)
}