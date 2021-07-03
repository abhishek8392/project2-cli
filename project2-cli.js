var readlineSync = require('readline-sync');
var score=0;
var userName = readlineSync.question("What's your Name? ");
console.log("Hello " +userName + ", Welcome to this quiz!");
console.log("This quiz has all general questions about how much you know me.) ");




function game(question,answer){
userAnswer=readlineSync.question(question);
if (userAnswer.toUpperCase() === answer.toUpperCase()){
  score++;
  console.log("Correct! Your score is "+score);
}else{console.log("Oops Wrong! Your score is "+score);} }



var questions =[{
  ques:"My born city is? ",
  ans:"bhuj",},
{  ques:"my fav city? ",
  ans:"jaipur",},
{ ques:"my favourite fruit? ",
  ans:"Orange",},
{ques:"My fav friends character?",
  ans:"Rachel",}]

for (var i=0; i<questions.length; i++)
{var currentQ = questions[i];
  game (currentQ.ques,currentQ.ans)}

  console.log("Thank you for playing this game");