//Connecting Elements

var quest = document.getElementById("question")
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var startBtn = document.getElementById("startBtn")
var startQuiz = document.getElementById("starting")
var answerBoard = document.getElementById("answers")



//These are the Questions for the Quiz

const testQuestions = [
    {
        question: "Test question?",
        answerA: "A",
        answerB: "B",
        answerC: "C",
        answerD: "D",
        correctA: "C"
    },
    {
        question: "Number 2",
        answerA: "1",
        answerB: "2",
        answerC: "3",
        answerD: "4",
        correctA: "A"
    }

]

//Function to populate the quiz

var currentQuestion = 0;
var endQuestion = testQuestions.length;
var correct;

function populateQuiz() {
    var questionStart = testQuestions[currentQuestion];
    quest.innerHTML = "<p>" + questionStart.question + "</p>";
    choiceA.innerHTML = questionStart.answerA;
    choiceB.innerHTML = questionStart.answerB;
    choiceC.innerHTML = questionStart.answerC;
    choiceD.innerHTML = questionStart.answerD;
};

//Starting the Quiz

function check(answer) {
    correct = testQuestions[currentQuestion].correctA

    if (answer === correct && currentQuestion !== endQuestion) {
        score++;
        alert("Hell yeah you got it right!");
        currentQuestion++;
        populateQuiz();
    }
}


//Event Listeners

startBtn.addEventListener("click", populateQuiz);

answerBoard.addEventListener("click", function(event) {
    
    
    console.log(event.target);
})
