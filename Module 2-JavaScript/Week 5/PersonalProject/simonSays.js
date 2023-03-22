const startButton = document.querySelector(".start-button");
const instructions = document.querySelector(".instructions");
const gameBoard = document.querySelector(".game-board");

const levelText = document.getElementById("level");

const tiles = ["aqua", "pink", "green", "purple"];

const userTurnTime = 950;
const simonSeqTime = 750;
const nextLevelTime = 1300;
const inactiveTileTime = 350;

let userLevel = 0;
let simonSequence = [];
let userSequence = [];

//click a button to start game
startButton.addEventListener('click', gameStart);

gameBoard.addEventListener('click', (event) => {
    const { tile } = event.target.dataset; 
    if (tile) tileClick(tile);
});

function gameStart() {
    startButton.classList.add("hidden");


    instructions.innerText = "Wait for Simon.";

    userLevel = 0;

    nextLevel();
}

//continues to next level 
function nextLevel() {
    userLevel += 1;
    userSequence = [];
    gameBoard.classList.add("unclickable");
    instructions.innerText = "Watch the sequence!";
    levelText.innerText = userLevel;

    //level up to add one tile to simon sequence
    setTimeout(() => {
        simonSequence.push(randomTile());
        playSequence(simonSequence);
    }, 1000);
    

    setTimeout(() => {
        userTurn();
    }, userLevel * userTurnTime);

}

//randomly generated simon sequence
function randomTile() {
    const randomTile = tiles[Math.floor(Math.random() * tiles.length)];
    return randomTile;
}

//highlight simon sequence at timed interval
function playSequence(sequence) {
    sequence.forEach((color, index) => {
        setTimeout(() => {
            activeTile(color);
        }, index * simonSeqTime);
    })
}

function activeTile(color) {
    const tile = document.querySelector(`[data-tile='${color}']`);

    tile.classList.remove("inactive");

    setTimeout(() => {
        tile.classList.add("inactive");
    }, inactiveTileTime);
}

function userTurn() {
    gameBoard.classList.remove("unclickable");
    instructions.innerText = "Your turn!";

}

function tileClick(tile) {
    userSequence.push(tile);

    if(userSequence.length === simonSequence.length) {
        userSequence = [];
        if(userLevel === 6) {
            winGame();
        } else {
            instructions.innerText = "Keep going!";
            setTimeout(nextLevel, nextLevelTime);
            return;
        }
    }

    let wrongTileClicked = false; 

    for (let i = 0; i < userSequence.length; i++){
        if(userSequence[i] !== simonSequence[i]) {
            wrongTileClicked = true;
            break; //This will "jump out" of the loop
        } 
    }

    if (wrongTileClicked) {
        resetGame();
        return;
    }
}

function resetGame() {
    userSequence = [];
    simonSequence = [];
    userLevel = 0;

    levelText.innerText = "0";

    startButton.classList.remove("hidden");
    gameBoard.classList.add("unclickable");

    instructions.innerText = "GAME OVER. Want to play again?";


}

function winGame() {
    userSequence = [];
    simonSequence = [];
    userLevel = 0;

    startButton.classList.remove("hidden");
    gameBoard.classList.add("unclickable");

    instructions.innerText = "YOU WIN! CONGRATS!";
}