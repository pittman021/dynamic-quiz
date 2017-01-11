const allQuestions = [{
  "Question": "What is Tims Name?",
  "Choices": ["Tim", "Tony", "Travis"],
  "correctAnswer": "Tim"
}, {
  "Question": "Where is Tim From?",
  "Choices": ["Austin", "Manassas", "DC"],
  "correctAnswer": "Manassas"
},{
  "Question": "What is Moo Moo's name?",
  "Choices": ["Moo", "Moo Moo", "Katharine"],
  "correctAnswer": "Moo Moo"
}];
// everything is based on counter. Same button for everything. 
//get quiz Question gets the question then adds the userData
// 

// 1 button to start quiz
// 2 button to set quiz data

var userScore = [];
var counter = 0;

$(document).ready(function() {
  
  displayQuestion();
  // click event to start quiz and show answers  
  $('#myButton').on('click', function() {  
  
  $('#myForm').removeClass('hidden');
  $('.answers').find('p').remove();
  saveScore();
  
    if (counter < allQuestions.length) {  
    
    displayQuestion();
    }
      else { 
      displayScore();
      }
  });
});
  
// This shows a quiz question based on counter // 
function displayQuestion() {
  const question = allQuestions[counter].Question;
  const choices = allQuestions[counter].Choices;
  
  $('#myButton').text('Next'); // update the button
  $('.question').html(allQuestions[counter].Question); // replace the question
  $('#myForm').html(''); // clear the choices
  
  choices.map(function(val) {
    $('#myForm').append(`<input type="radio" name="choose" value="${val}"><label for="${val}"> ${val}</label><br/>`);
    });
  counter++;
  }

// This saves score submission to userScore array
function saveScore() {
 userScore.push($('input:checked').val());
}

// This shows results based on counter & userScore data 
function displayScore() {
  $('.question').text('Your quiz results are below');
  $('#myButton').text('Start Over');
  $('#myForm').addClass('hidden');
  $('.results').removeClass('hidden');
  
  for (i=0; i < allQuestions.length; i++) {
    console.log(allQuestions[i].correctAnswer);
    if (userScore[i] === allQuestions[i].correctAnswer) {
      $('.answers').append(`<p value="Answer${i}">${userScore[i]}:"Correct!"</p>`);
    }
    else {
      $('.answers').append(`<p value="Answer${i}">${userScore[i]}:"False!"</p>`);
    }
  }
  // userScore.map(function(val) {
  //   if (val === )
  //   $('.answers').append(`<p value="${val}">${val}</p>`);
  //   });
  counter = 0;
  userScore = [];
}