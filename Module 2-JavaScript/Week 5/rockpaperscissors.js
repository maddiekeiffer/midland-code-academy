const buttons = document.querySelectorAll(".choice");
const userDisplay = document.querySelector("#user");
const compDisplay = document.querySelector("#computer");

const gameData = {
    game: 1,
    tied: 0,
    lose: 0,
    win: 0,
};

gameData.game = document.querySelector("#game");
gameData.tied = document.querySelector("#tie");
gameData.lose = document.querySelector("#loss");
gameData.win = document.querySelector("#win");

buttons.forEach((button) => {
    button.addEventListener("click", userClick);
})

function computerValue() {
    let choices = ["rock", "paper", "scissors"]
    
    return choices[Math.floor(Math.random() * choices.length)];
}


function userClick(e) {
    let user = e.target.value;
    userDisplay.innerText = `You picked: ${user}`;

    let computer = computerValue();
    compDisplay.innerText = `The computer picked: ${computer}`;

    if (user === computer) {
        gameData.tied.innerText++;
        alert("You have tied!");
        
    } else if ((user === "rock" && computer === "paper") || (user === "paper" && computer === "scissors") || (user === "scissors" && computer === "rock")) {
        gameData.lose.innerText++;
        alert("You have lost.");
        
    } else {
        gameData.win.innerText++;
        alert("You have won!");
        
    }
    alert("Pick a button to begin next game!");
    gameData.game.innerText++;
}







