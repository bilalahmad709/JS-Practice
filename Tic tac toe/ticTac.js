let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rest_button");
let newGame = document.querySelector(".new-Game");
let winnerDiv = document.querySelector(".winner-div");
let winnerP = document.querySelector(".winner-p");

let turnA = true;  //playerA , playerB;

const winpatterns= [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4 ,8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) =>{
   box.addEventListener("click", () =>{
    if(turnA){
        box.innerText = "A";
        box.style.color = "red";
        turnA = false;
    }
    else{
        box.innerText = "B";
        turnA = true;
    }
    box.disabled = true;
    checkWinner();
   });
});

const showWinner = (winner) =>{
    winnerP.innerText = `The Winner of the Game is ${winner}`;
    winnerDiv.classList.remove("hide_winner");
}

// function for checking patterens
const checkWinner = () =>{
    for (let pattern of winpatterns){
        let position1val = boxes[pattern[0]].innerText;
        let position1va2 = boxes[pattern[1]].innerText;
        let position1va3 = boxes[pattern[2]].innerText;

        if (position1val != "" && position1va2!= "" && position1va3 != ""){
            if(position1val === position1va2 && position1va2 === position1va3){
            console.log ("winner is ", position1val);
            showWinner(position1val);
            }
        };

    }
}
