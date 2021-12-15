const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
];
const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
];
const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
];

let timer;
let timeRemaining;
let lives;
let selectedNum;
let selectedTile;
let disableSelect;


window.onload = function () {
    id("start-btn").addEventListener("click", startGame);
    //add eventlistener to number container and numbers
    for (let i = 0; i < id('number-container').children.length; i++) {
        id('number-container').children[i].addEventListener("click", function () {
            if (!disableSelect) {
                if (this.classList.contains("selected")) {
                    this.classList.remove("selected");
                    selectedNum = null;
                } else {
                    for (let i = 0; i < 9; i++) {
                        id("number-container").children[i].classList.remove("selected");
                    }
                    this.classList.add("selected");
                    selectedNum = this;
                    updateMove();
                };
            };
        });
    };
};

function startGame() {
    console.log('start');
    id("rules").classList.remove("hidden");
    //choose board difficulty
    let board;
    if (id("diff-1").checked) board = easy[0];
    else if (id("diff-2").checked) board = medium[0];
    else board = hard[0];

    //set lives to 5 and enable selecting lives
    lives = 5;
    disableSelect = false;
    id("lives").textContent = "Lives Remaining: " + lives;
    //create board
    generateBoard(board);
    //start timer
    startTimer();
    //sets theme based on input

};

function startTimer() {
    id("stats").classList.remove("hidden");
    if (id("time-1").checked) {
        timeRemaining = 180;
    } else if (id("time-2").checked) {
        timeRemaining = 300;
    } else {
        timeRemaining = 600;
    }
    id("timer").textContent = timeConversion(timeRemaining);
    timer = setInterval(function () {
        timeRemaining--;
        id("timer").textContent = timeConversion(timeRemaining);
        if (timeRemaining === 0) {
            clearTimeout(timer);
            endGame();
        }
    }, 1000);
}



function generateBoard(board) {
    //clear previous board
    clearPrevious();
    //Let used to increment tile ids
    let idCount = 0;
    //create board 81 tiles
    for (let i = 0; i < 81; i++) {
        //create tile
        let tile = document.createElement("p");
        tile.classList.add("board-tile");
        if (board.charAt(i) != "-") {
            tile.textContent = board.charAt(i);
        } else {
            //add event listener to tile
            tile.addEventListener("click", function () {
                if (!disableSelect) {
                    if (tile.classList.contains("selected")) {
                        tile.classList.remove("selected");
                        selectedTile = null;
                    } else {
                        for (let i = 0; i < 81; i++) {
                            qsa(".tile")[i].classList.remove("selected");
                        }

                        tile.classList.add("selected");
                        selectedTile = tile;
                        updateMove();
                    }
                }
            });
        }
        //set tile id
        tile.id = idCount;
        //increment tile id
        idCount++;
        //add tile class
        tile.classList.add("tile");
        if ((tile.id > 17 && tile.id < 27) || (tile.id > 44 && tile.id < 54)) {
            tile.classList.add("bottomBorder");
        }
        if ((tile.id + 1) % 9 === 3 || (tile.id + 1) % 9 === 6) {
            tile.classList.add("rightBorder");
        }
        //add tile to board
        id("board").appendChild(tile);

    }

    id("number-container").classList.remove("hidden");
    id("rules").classList.add("hidden");
};


function updateMove() {
    if (selectedNum && selectedTile) {

        selectedTile.textContent = selectedNum.textContent;
        if (checkCorrect(selectedTile)) {
            selectedTile.classList.remove("selected");
            selectedNum.classList.remove("selected");

            selectedNum = null;
            selectedTile = null;

            if (checkDone()) {
                endGame();
            }

        } else {
            disableSelect = true;
            selectedTile.classList.add("incorrect");

            setTimeout(function () {
                lives--;
                if (lives === 0) {
                    endGame()
                } else {
                    id("lives").textContent = "Lives Remaining: " + lives;
                    disableSelect = false;
                }

                selectedTile.classList.remove("incorrect");
                selectedTile.classList.remove("selected");
                selectedNum.classList.remove("selected");

                selectedNum = null;
                selectedTile.textContent = "";
                selectedTile = null;

            }, 1000);
        }
    }
};

function checkCorrect(tile) {
    let solution;
    if (id("diff-1").checked) {
        solution = easy[1];
    } else if (id("diff-2").checked) {
        solution = medium[1];
    } else {
        solution = hard[1];
    }

    if (tile.textContent === solution.charAt(tile.id)) {
        return true;
    } else {
        return false;
    }
};
function checkDone() {
    let tiles = qsa(".tile");
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].textContent === "") {
            return false;
        }
    }
    return true;
}
function endGame() {
    disableSelect = true;
    clearTimeout(timer);
    id("number-container").classList.add("hidden");

    if (lives === 0 || timeRemaining === 0) {
        id("lives").textContent = "You Lose!";
    } else {
        id("lives").textContent = "You Win!";
    }
}

function clearPrevious() {
    //access all the tiles
    let tiles = qsa(".tile");
    //remove each tile
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].remove();
    }

    //clear game setup
    if (timer) clearTimeout(timer);

    //deselect any number
    for (let i = 0; i < id("number-container").children.length; i++) {
        id("number-container").children[i].classList.remove("selected");
    }
    //clear selected variable
    selectedNum = null;
    selectedTile = null;
};




//helper functions
function timeConversion(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return "Time Remaining: " + minutes + ":" + seconds;
}

function id(x) {
    return document.getElementById(x);
}

function className(x) {
    return document.getElementsByClassName(x);
};

function qsa(selector) {
    return document.querySelectorAll(selector);
};

function qs(selector) {
    return document.querySelector(selector);
};

