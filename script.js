let homeScore = document.getElementById("score-home")
let homeScoreValue = 0

let guestScore = document.getElementById("score-guest")
let guestScoreValue = 0

function increaseOnePointHome(){
    homeScoreValue += 1
    homeScore.innerText = homeScoreValue
}
function increaseOnePointGuest(){
    guestScoreValue += 1
    guestScore.innerText = guestScoreValue
}
function increaseTwoPointHome(){
    homeScoreValue += 2
    homeScore.innerText = homeScoreValue
}
function increaseTwoPointGuest(){
    guestScoreValue += 2
    guestScore.innerText = guestScoreValue
}
function increaseThreePointHome(){
    homeScoreValue += 3
    homeScore.innerText = homeScoreValue
}
function increaseThreePointGuest(){
    guestScoreValue += 3
    guestScore.innerText = guestScoreValue
}

function newGame(){
    homeScore.innerText = 0
    homeScoreValue = 0
    guestScore.innerText = 0
    guestScoreValue = 0
}
