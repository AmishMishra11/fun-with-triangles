var quizForm = document.querySelector(".quiz-form");
var buttonQuiz = document.querySelector("#quiz-button");
var messageQuiz = document.querySelector("#quiz-message");

var correctAnswers = ["40°", "60°", "Hypotenuse", "90°", "Right angled"];

function calculateScore() {
  var score = 0;
  var i = 0;
  var formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[i]) {
      score++;
    }
    i++;
  }

  messageQuiz.innerText = "Your Score is " + score;
}

buttonQuiz.addEventListener("click", calculateScore);
