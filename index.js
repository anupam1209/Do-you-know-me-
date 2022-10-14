var readlineSync = require('readline-sync');

var score = 0;

// data of high score
var highScores = [
  {
    name: "Atul",
    score: 3,
  },

  {
    name: "Mayank",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "Where do Anupam live? ",
  answer: "Bangalore"
}, {
  question: "Anupam's favorite superhero would be? ",
  answer: "Iron Man"
},
{
  question: "Where do Anupam work? ",
  answer: "Verifone"
},
{
  question: "If you know me, by which name everybody made fun me of? ",
  answer: "Pumpkin"
},
{
  question: "What is my nickname? ",
  answer: "Annu"
}];

function welcome() {
  var userName = readlineSync.question("May I have your name? ");

  console.log("Welcome " + userName + " to DO YOU KNOW Anupam?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");
    console.log("The right answer is " + answer);

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAYY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
