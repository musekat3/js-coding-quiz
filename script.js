
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var questions = [
			{
				questions: "Which on of these is NOT a way to use CSS in a webpage?",
				answers: {
					a: 'inline',
					b: 'external',
					c: 'outline',
					d: 'internal',
				},
				correctAnswer: 'c'
			},
			{
				questions: "Which element contains information that helps the browser to render the page correctly?",
				answers: {
					a: '<h>',
					b: '<title>',
					c: '<p>',
					d: '<link>',
				},
				correctAnswer: 'a'
			},
			{
				questions: "What does DOM stand for?",
				answers: {
					a: 'Download Object Model',
					b: 'Document Obtuse Media',
					c: 'Document Object Model',
					d: 'Download object Media',
				},
				correctAnswer: 'c'
			},
			{
				questions: "What is the purpose of APIs?",
				answers: {
					a: 'to connect user to their respositories',
					b: 'to interact with components of a web browser',
					c: 'to handle user interaction',
					d: 'to help define functions',
				}, 
				correctAnswer: 'b'
			},
		]
	}

	showQuestions(questions, quizContainer);

	var submitButton = document.getElementById('submit');

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
};

function showQuestions(questions, quizContainer){
	var output = [];
	var answers;

	
	for(var i=0; i<questions.length; i++){
		answers = [];

		
		for(letter in questions[i].answers){

			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	var quizContainer = document.getElementById('quiz');

	quizContainer.innerHTML = output.join('');
}
showQuestions(questions, quizContainer);
function showResults(questions, quizContainer, resultsContainer){
	
	
	var answerContainers = quizContainer.querySelectorAll('.answers');
	var userAnswer = '';
	var numCorrect = 0;
	
	
	for(var i=0; i<questions.length; i++){

	
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
	
		if(userAnswer===questions[i].correctAnswer){
			numCorrect++;
			answerContainers[i].style.color = 'lightgreen';
		} else{
			answerContainers[i].style.color = 'darkred';
		}
	}

	var resultsContainer = document.getElementById('results');

	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(questions, quizContainer, resultsContainer, submitButton);

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

function countdown() {
  var timeLeft = 30;

  var timeInterval = setInterval(function () {

    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
    }
  }, 1000);
}

countdown();