//Connecting Elements

var quest = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var startBtn = document.getElementById("startBtn");
var startQuiz = document.getElementById("starting");
var answerBoard = document.getElementById("answers");
var scoreCard = document.getElementById("scorebox");
var timeBox = document.getElementById("timeLeft");
var initials = document.getElementById("intBox");
var subBtn = document.getElementById("submit");
var playerIn = document.getElementById("you");
var sNameCont = document.getElementById("savedName");
var sScoreCont = document.getElementById("yourScore");
var leaderBoard = document.getElementById("allScores")
var final = document.getElementById("board")

//Other Globals

var timeleft = 65;
var timeInt;
var score = 0;



//These are the Questions for the Quiz

const testQuestions = [
    {
        question: "What does JS stand for?",
        answerA: "Just super",
        answerB: "Jerk Sauce",
        answerC: "Java Script",
        answerD: "Jump Street",
        correctA: "C"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answerA: "<script>",
        answerB: "<java>",
        answerC: "<js>",
        answerD: "<honda crv>",
        correctA: "A"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answerA: "The <h> tag",
        answerB: "The <Body>",
        answerC: "The <footer>",
        answerD: "The CSS sheet",
        correctA: "B"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answerA: "msg(Hello World)",
        answerB: "alert(Hello World)",
        answerC: "msg[Hello World]",
        answerD: "Hello World",
        correctA: "B"
    },
    {
        question: "How much wood could a woodchuck chuck",
        answerA: "11",
        answerB: "What",
        answerC: "6 woods",
        answerD: "Why would I know that?",
        correctA: "D"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answerA: "myFunction()",
        answerB: "my()Function",
        answerC: "my:Function",
        answerD: "(myFunction)",
        correctA: "A"
    }

];

//Starting the quiz here

function startItUp() {
    startQuiz.style.display = "none";
    timeBox.style.display = "flex";
    populateQuiz();

    //Time part
    timeInt = setInterval(function() {
        timeleft--;
        timeBox.textContent = "Your time left " + timeleft;

        if(timeleft <= 0) {
            clearInterval(timeInt);
            gameOver();
        }
    }, 1000);
};


//End of the game

function gameOver() {
    quest.style.display = "none";
    answerBoard.style.display = "none";
    initials.style.display = "flex";
    timeBox.style.display = "none";

};


//Function to populate the quiz

var currentQuestion = 0;
var endQuestion = testQuestions.length;
var correct;



function populateQuiz() {

    var questionStart = testQuestions[currentQuestion];
    quest.textContent = questionStart.question;
    choiceA.textContent = questionStart.answerA;
    choiceB.textContent = questionStart.answerB;
    choiceC.textContent = questionStart.answerC;
    choiceD.textContent = questionStart.answerD;
};


//This is the function that will check your answers

function check(answer) {
    correct = testQuestions[currentQuestion].correctA
    
    if (answer === correct && currentQuestion !== endQuestion) {
        alert("Hell yeah you got it right! 10 pts!");
        currentQuestion++;
        score++;
        populateQuiz();
    }else if (answer !== correct && currentQuestion !== endQuestion) {
        alert("Damn, that's wrong");
        currentQuestion++;
        populateQuiz();
        timeleft -=10;
    }else {
        gameOver();
    }

    if (currentQuestion === endQuestion) {
        gameOver();
    }
};


//Event Listeners

startBtn.addEventListener("click", startItUp);



answerBoard.addEventListener("click", function(event) {
    var answer = event.target.id;
    console.log(event.target.id);
    check(answer);
});



subBtn.addEventListener("click", function daScore() {
    
    if(playerIn.value === ""){
        alert("Gotta put something");
        return false;
    }else{
        var savedScore = JSON.parse(localStorage.getItem("savedScore")) || [];
        var player1 = playerIn.value.trim();
        var currentScore = {
            init : player1,
            score : score
        };

        savedScore.push(currentScore);
        localStorage.setItem("savedScore", JSON.stringify(savedScore));
    }

    scoreCard.style.display = "flex";
    initials.style.display = "none";
    sNameCont.textContent = player1;
    sScoreCont.textContent = score;
});


leaderBoard.addEventListener("click", function ldrBoard() {

        scoreCard.style.display = "none"
        final.style.display = "flex"
    
        final.innerHTML = JSON.parse(window.localStorage.getItem('currentScore'));
    
});


 

