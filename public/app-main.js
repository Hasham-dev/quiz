var playerName = prompt("Hey! Enter your name",'');
var currentQuestion = 0 ;
var score = 0;
var totalQuestions = Object.keys(question).length;
// var questionIndex = 0;



var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCard = document.getElementById('result')
var resetBtn = document.getElementById('reset-btn')

function loadQuestion (questionIndex){
    var q = question[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

function loadNextQuestion(){
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select your answer');
        return;
    }
    var answer = selectedOption.value;
    if(question[currentQuestion].answer == answer){
        score += 10;
    }
    selectedOption.checked = false
    currentQuestion++;
    
    if(currentQuestion == totalQuestions -1){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totalQuestions){
        container.style.display = "none";
        resultCard.style.display = '';
        resetBtn.style.display = '';
        resultCard.textContent = 'Your Score ' + score  ;

        var finalScore = {
            "playerName": playerName,
            "score": score
        }
        firebase.database().ref("Player Details").push(finalScore)
    }else{ 
    loadQuestion(currentQuestion);}
}

loadQuestion(currentQuestion);
