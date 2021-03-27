var isGameRunning = false;
var start = document.querySelector("#start");
var timeNum = document.querySelector("#timeNum");
var timer = document.querySelector("#timer");
var main = document.querySelector("#main");
var questionPlace = document.querySelector("#questionPlace");
var firstAnswer = document.querySelector("#firstAnswer");
var secondAnswer = document.querySelector("#secondAnswer");
var thirdAnswer = document.querySelector("#thirdAnswer");
var fourthAnswer = document.querySelector("#fourthAnswer");

var questions = [
    {
        question: "What does it mean when cats wag their tail?",
        answer1: "They're happy",
        answer2: "They're angry", //correct
        answer3: "They're hunting",
        answer4: "They're scared"
    },
    {
        question: "What were dachshunds bred to do?",
        answer1: "To herd",
        answer2: "To be cute",
        answer3: "To fight badgers", //correct
        answer4: "To guard"
    },
    {
        question: "What does a slow blink mean in cat language?",
        answer1: "I trust you", //correct
        answer2: "I hate you",
        answer3: "You look tasty",
        answer4: "Rub my tummy"
    },
    {
        question: "Dogs' sense of smell is __ than ours.",
        answer1: "Slightly worse",
        answer2: "Slightly better",
        answer3: "15 times better",
        answer4: "40 times better" //correct
    }
];

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