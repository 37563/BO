const readlineSync = require('readline-sync');

console.log('Welcome to the Quiz');
let username = readlineSync.question("What's your Name: \n");
console.log('Hello',username,", Let's Play the Quiz!!");

console.log('\n');
console.log('Rules & Instructions: ');
console.log('1.',username + ', There are 5 Questions about me');
console.log('2. You will get 1 point on each Right Answer.');
console.log('\n');

var questionsList = [

];

var mcqList = [

  {
    array : ['A - ', 'B - '],
    question : 'Whats my full name"? ',
    answer : 'A - '
  },
  {
    array : ['A - ', 'B - ', 'C - ', 'D - '],
    question : ' ',
    answer : 'C - '
  },
  {
    array : ['A - ', 'B - ', 'C - ', 'D - '],
    question : ' ',
    answer : 'D - '
  },
  {
    array : ['A - ', 'B - ', 'C - r', ''],
    question : ' ',
    answer : 'A - '
  },
  {
    array : ['A - ', 'B - ', 'C - ', ''],
    question : ' ',
    answer : 'D - '
  },
];

let score = 0;
function quiz(question,answer){
  let userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log('You are Right.');
    score = score + 1;
  } else{
    console.log('You are Wrong.');
    console.log('The Correct Answer is:',answer);
    score = score - 0;
  }
  if(score < 0){
    score = 0;
  }
  console.log(chalk.cyan('Score is: ',score));
}

function quizMcq(listOfAnswers,question,answer){
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
    console.log('You are Right.');
    score = score + 1;
  } else{
    console.log('You are Wrong.');
    console.log('The Correct Answer is: ',answer);
    score = score - 0;
  }

  if(score < 0){
    score = 0;
  }
  console.log('Score is: ',score);
}

for(var i = 0;i<questionsList.length;i++){
  console.log('\n');
  quiz(questionsList[i].question,questionsList[i].answer);
  console.log('*******************************');
}

for(var i = 0;i < mcqList.length; i++){
  console.log('\n');
  quizMcq(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
  console.log('*******************************');
}

console.log('\n');
console.log('Congratulations,',username,'your Total Score is: ',score);
