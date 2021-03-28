var isGameRunning = false;
var start = document.querySelector("#start");
var timeNum = document.querySelector("#timeNum");
var timer = document.querySelector("#timer");
var main = document.querySelector("#main");
var answerSection = document.querySelector("#answerSection");
var questionPlace = document.querySelector("#questionPlace");
var firstAnswer = document.querySelector("#firstAnswer");
var secondAnswer = document.querySelector("#secondAnswer");
var thirdAnswer = document.querySelector("#thirdAnswer");
var fourthAnswer = document.querySelector("#fourthAnswer");
var score = "";
var questions = [
    {
        question: "What does it mean when cats wag their tail?",
        answer1: "They're happy",
        answer2: "They're angry", //correct
        answer3: "They're hunting",
        answer4: "They're scared",
        correctAnswer: "answer2"
    },
    {
        question: "What were dachshunds bred to do?",
        answer1: "To herd",
        answer2: "To be cute",
        answer3: "To fight badgers", //correct
        answer4: "To guard",
        correctAnswer: "answer3"
    },
    {
        question: "What does a slow blink mean in cat language?",
        answer1: "\"I trust you\"", //correct
        answer2: "\"I hate you\"",
        answer3: "\"You look tasty\"",
        answer4: "\"Rub my tummy\"",
        correctAnswer: "answer1"
    },
    {
        question: "Dogs' sense of smell is __ than ours.",
        answer1: "Slightly worse",
        answer2: "Slightly better",
        answer3: "15 times better",
        answer4: "40 times better", //correct
        correctAnswer: "answer4"
    }
]

//game starts when I click button
function startGame() {
    isGameRunning = true;
    startTimer();
    var output = [];
    var question;
    var answer1;
    var answer2;
    var answer3;
    var answer4;

    //presented question
    for (var i = 0; i < questions.length; i++) {
        output.push(
            questionPlace.textContent = questions[i].question

        )
    }
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
            endGame();
            //localStorage.setItem('foo', foo);
        }
    }, 1000)
}

//if i answer right, presented another question
//if i answer wrong, time is subtracted from clock
//when all questions answered, game is over

//presented score (timer = score)
function endGame() {
    isGameRunning = false;
    clearInterval(timer);
    questionPlace.innerHTML = "Score: " + timeLeft;
    answerSection.innerHTML = "";
}
//can save initals and score


start.addEventListener("click", startGame)