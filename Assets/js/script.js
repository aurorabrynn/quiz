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

var question1 = {
    question: "What does it mean when cats wag their tail?",
    answer1: "They're happy",
    correctAnswer: "They're angry", //correct
    answer3: "They're hunting",
    answer4: "They're scared"
}
var question2 = {
    question: "What were dachshunds bred to do?",
    answer1: "To herd",
    answer2: "To be cute",
    correctAnswer: "To fight badgers", //correct
    answer4: "To guard"
}
var question3 = {
    question: "What does a slow blink mean in cat language?",
    correctAnswer: "\"I trust you\"", //correct
    answer2: "\"I hate you\"",
    answer3: "\"You look tasty\"",
    answer4: "\"Rub my tummy\""
}
var question4 = {
    question: "Dogs' sense of smell is __ than ours.",
    answer1: "Slightly worse",
    answer2: "Slightly better",
    answer3: "15 times better",
    correctAnswer: "40 times better" //correct
}

//game starts when I click button
function startGame() {
    isGameRunning = true;
    startTimer();

    //presented question
    questionPlace.textContent = question1.question;
    firstAnswer.textContent = question1.answer1;
    secondAnswer.textContent = question1.correctAnswer;
    thirdAnswer.textContent = question1.answer3;
    fourthAnswer.textContent = question1.answer4;

    question1.correctAnswer.addEventListener("click", endGame()) /*{
        questionPlace.textContent = question2.question;
        firstAnswer.textContent = question2.answer1;
        secondAnswer.textContent = question2.answer2;
        thirdAnswer.textContent = question2.correctAnswer;
        fourthAnswer.textContent = question2.answer4;
    })*/
}

/*function next() {
    questionPlace.textContent = question2.question;
    firstAnswer.textContent = question2.answer1;
    secondAnswer.textContent = question2.answer2;
    thirdAnswer.textContent = question2.correctAnswer;
    fourthAnswer.textContent = question2.answer4;
}*/

//timer starts
function startTimer() {
    clearInterval(timer);
    timeLeft = 5;
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