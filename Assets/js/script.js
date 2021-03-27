var isGameRunning = false;
var start = document.querySelector("#start");
var timeNum = document.querySelector("#timeNum");
var timer = document.querySelector("#timer");

//game starts when I click button
function startGame() {
    isGameRunning = true;
    startTimer();
}
//timer starts
function startTimer() {
    clearInterval(timer);
    timeLeft = 75;
    timeNum.textContent = timeLeft;
    timer = setInterval(function () {
        timeLeft--;
        timeNum.textContent = timeLeft;
        //when timer reaches 0, game is over
        if (timeLeft < 1) {
            isGameRunning = false;
            clearInterval(timer);
            //localStorage.setItem('losses', losses);
        }
    }, 1000)
}
//presented question
    //if i answer right, presented another question
    //if i answer wrong, time is subtracted from clock
//when all questions answered, game is over
//presented score (timer = score)
//can save initals and score


start.addEventListener("click", startGame)