var i = 0;
var timeLeft = 0;
var isGameRunning = false;
var messageEl = document.querySelector("#message");
var gameEl = document.querySelector("#game");
var start = document.querySelector("#start");
var timeNum = document.querySelector("#timeNum");
var timer = document.querySelector("#timer");
var questionPlace = document.querySelector("#questionPlace");
var answerSection = document.querySelector("#answerSection");
var firstAnswer = document.querySelector("#answer1");
var secondAnswer = document.querySelector("#answer2");
var thirdAnswer = document.querySelector("#answer3");
var fourthAnswer = document.querySelector("#answer4");
var answerBtns = document.querySelectorAll(".answer");
var rightOrWrong = document.querySelector("#rightOrWrong");
var initials = document.querySelector("#initials");
var save = document.querySelector("#save");
var ranking = document.querySelector("#ranking");
var again = document.querySelector("#again");

var questions = [
    {
        question: "What does it mean when cats wag their tail?",
        answer1: "They're happy",
        answer2: "They're angry", //correct
        answer3: "They're hunting",
        answer4: "They're scared",
        correctAnswer: "They're angry"
    },
    {
        question: "What were dachshunds bred to do?",
        answer1: "To herd",
        answer2: "To be cute",
        answer3: "To fight badgers", //correct
        answer4: "To guard",
        correctAnswer: "To fight badgers"
    },
    {
        question: "What does a slow blink mean in cat language?",
        answer1: "\"I trust you\"", //correct
        answer2: "\"I hate you\"",
        answer3: "\"You look tasty\"",
        answer4: "\"Rub my tummy\"",
        correctAnswer: "\"I trust you\""
    },
    {
        question: "Dogs' sense of smell is __ than ours.",
        answer1: "Slightly worse",
        answer2: "Slightly better",
        answer3: "15 times better",
        answer4: "40 times better", //correct
        correctAnswer: "40 times better"
    }
];

//game starts when I click button
function startGame() {
    isGameRunning = true;
    startTimer();
    present();
}

function present() {
    //presented question
    questionPlace.textContent = questions[i].question
    firstAnswer.textContent = questions[i].answer1
    secondAnswer.textContent = questions[i].answer2
    thirdAnswer.textContent = questions[i].answer3
    fourthAnswer.textContent = questions[i].answer4
    //when all questions answered, game is over
}

function toggleElementDisplay(element) {
    if (window.getComputedStyle(element).display === "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }
}

answerBtns.forEach(function (ansBtn) {
    ansBtn.addEventListener("click", function (event) {
        var userGuess = event.target.textContent
        //if i answer right, presented another question
        if (userGuess === questions[i].correctAnswer) {
            if (window.getComputedStyle(rightOrWrong).display === "none") {
                toggleElementDisplay(rightOrWrong);
            }
            rightOrWrong.innerHTML = "Right!"
            i++
            //when all questions answered, game is over
            if (i > 3) {
                endGame();
                return;
            }
            present();
            //if i answer wrong, time is subtracted from clock
        } else {
            if (window.getComputedStyle(rightOrWrong).display === "none") {
                toggleElementDisplay(rightOrWrong);
            }
            rightOrWrong.innerHTML = "Wrong!"
            timeLeft -= 15;
        }
    })
})

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
        }
    }, 1000)
}

//presented score (timer = score)
function endGame() {
    isGameRunning = false;
    clearInterval(timer);
    questionPlace.innerHTML = "Score: " + timeLeft;
    answerSection.innerHTML = "Good job! Enter your initials here: ";
    toggleElementDisplay(rightOrWrong);
    toggleElementDisplay(initials);
    rightOrWrong.innerHTML = "";
    toggleElementDisplay(save);

    //can save initals and score
    save.addEventListener("click", function () {
        localStorage.setItem('score', timeLeft);
        localStorage.setItem('user', initials.value);
        showRanking();
    })

}

function showRanking() {
    var scoreObj = localStorage.getItem("score");
    var userObj = localStorage.getItem("user");
    questionPlace.innerHTML = "High Score:";
    answerSection.innerHTML = "";
    toggleElementDisplay(ranking);
    toggleElementDisplay(initials);
    toggleElementDisplay(save);
    toggleElementDisplay(again);
    ranking.innerHTML = userObj + " - " + scoreObj;
}


start.addEventListener("click", function () {
    toggleElementDisplay(messageEl)
    toggleElementDisplay(gameEl)
    startGame();
})

again.addEventListener("click", function () {
    window.location.reload();
})