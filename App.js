const questions = [
  {
    question: 'Which is the largest animal in the world?',
    answers: [
      { text: 'shark', correct: false },
      { text: 'Blue whale', correct: true },
      { text: 'Giraffe', correct: false },
      { text: 'Elephant', correct: false },
    ],
  },
  {
    question: 'Which is the smallest city in the world?',
    answers: [
      { text: 'Vatican City', correct: true },
      { text: 'Bhutan', correct: true },
      { text: 'Nepal', correct: false },
      { text: 'London', correct: false },
    ],
  },
  {
    question: 'Which is the largest desert in the world?',
    answers: [
      { text: 'Kalihari', correct: false },
      { text: 'Gobi', correct: false },
      { text: 'Sahara', correct: true },
      { text: 'Antartica', correct: false },
    ],
  },
  {
    question: 'Which is the smallest continent in the world?',
    answers: [
      { text: 'Asia', correct: false },
      { text: 'Australlia', correct: true },
      { text: 'Artic', correct: false },
      { text: 'Africa', correct: false },
    ],
  },
];

const questionElement = document.getElementById('question');
questionElement.innerText = 'DELL BOY';
// console.log(questionElement)
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerText = questionNo + '. ' + currentQuestion.question;
  // console.log(questionElement.innerHTML)
  console.log(currentQuestion.question);

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

startQuiz();
console.log('!!!!!!');
