let buttons = document.querySelectorAll(".button");
let resetGame = document.querySelector("#rGame");
let newGameBtn = document.querySelector("#new-btn");
// let resetScore = document.querySelector("#rScore");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turnO = true;      //playerX, playerO
let count = 0;         //To Track turn of player


const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];


const resetingGame = () => {
    turnO = true;
    count = 0;
    enableButtons();
    msgContainer.classList.add("hide");
};





buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (turnO) {                         // for player0
            button.innerText = "0";
            turnO = false;
        } else {
            button.innerText = "X";              // for playerX
            turnO = true;
        }
        button.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});


const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableButtons();
};


const disableButtons = () => {
    for (let button of buttons) {
        button.disabled = true;
    }
};




const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableButtons();
};


const enableButtons = () => {
    for (let button of buttons) {
        button.disabled = false;
        button.innerText = "";
    }
};



const checkWinner = () => {
    for (let pattern of winCondition) {
        let pos1Val = buttons[pattern[0]].innerText;
        let pos2Val = buttons[pattern[1]].innerText;
        let pos3Val = buttons[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {

            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                //console.log("winner is", pos1Val);
                //disableButtons();
                showWinner(pos1Val);
                return true;
            }
        }
    }
}

newGameBtn.addEventListener("click", resetingGame);

resetGame.addEventListener("click", resetingGame);



