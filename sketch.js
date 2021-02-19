var canvas;
var contestantCount, database, quiz, question, contestantCount;
var gameState = 0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new Quiz
  quiz.getState();
  quiz.start();
}

function draw(){
  background("pink");
}
