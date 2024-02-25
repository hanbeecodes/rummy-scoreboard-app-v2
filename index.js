let p1Score = 0
let p2Score = 0
let p3Score = 0

let player1Score = document.getElementById("player1-score")
let player2Score = document.getElementById("player2-score")
let player3Score = document.getElementById("player3-score")
let newGameBtn = document.getElementById("new-game-btn")

function player1Plus1() {
    p1Score+=1
    player1Score.textContent = p1Score
}

function player1Plus2() {
    p1Score+=10
    player1Score.textContent = p1Score
}

function player1Plus3() {
    p1Score+=50
    player1Score.textContent = p1Score
}

function player2Plus1() {
    p2Score+=1
    player2Score.textContent = p2Score
}

function player2Plus2() {
    p2Score+=10
    player2Score.textContent = p2Score
}

function player2Plus3() {
    p2Score+=50
    player2Score.textContent = p2Score
}

function player3Plus1() {
    p3Score+=1
    player3Score.textContent = p3Score
}

function player3Plus2() {
    p3Score+=10
    player3Score.textContent = p3Score
}

function player3Plus3() {
    p3Score+=50
    player3Score.textContent = p3Score
}

function reset() {
    p1Score=0
    p2Score=0
    p3Score=0
    player1Score.textContent = 0
    player2Score.textContent = 0
    player3Score.textContent = 0
}

//create the onclick listeners on the buttons
//create a variable of homescore and a variable of guestscore
//create 3 functions which are +1, +2 and +3
//write into all 3 functions that they alter the score
//will need to write these 3 functions twice, once for homescore and once for guestscore