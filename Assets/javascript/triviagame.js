var question1 = { question: '"Torchwood" is an anagram and spin-off of what popular British sci-fi series?',
				  choices: ["Doctor Who", "Red Dwarf", "Primeval", "Cold Lazarus"],
				  answer: 'Doctor Who',
				  image: ""	

				};

var question2 = { question: 'Star Trek: The Next Generation originally aired in what year?',
				  choices: ['1991', '1979', '1987', '1995'],
				  answer: '1987',
				  image: ""	
				};

var question3 = { question: 'Bruce Willis played a convict turned time traveler in what 1995 movie?',
				  choices: ['Die Hard', '12 Monkeys', 'The Sixth Sense', 'The Fifth Element'],
				  answer: '12 Monkeys',
				  image: ""
				};

var questionArray = [question1, question2, question3];

var triviaGame = { questionCounter: 0,
				   correctAnswerCounter: 0,
				   wrongAnswerCounter: 0,
				   unansweredCounter: 0,
				   questionTimer: 10,
				   timerRunning: false,
				   clock: "",
 
				   initialize: function(){
				   this.questionCounter = 0;
				   this.correctAnswerCounter = 0;
				   this.wrongAnswerCounter = 0;
				   this.unansweredCounter = 0;
				   this.questionTimer = 10;
				   $('.mainArea').html("<button type ='button' class='btn btn-default btn-lg btn-block start-button'>Start Game</button>");
				   },

				   reset: function(){
				   this.questionCounter = 0;
				   this.correctAnswerCounter = 0;
				   this.wrongAnswerCounter = 0;
				   this.unansweredCounter = 0;
				   this.questionTimer = 10;
				   this.generateHTML();
				   this.timer();
				   },

				   countDown: function(){
				   	if (this.questionTimer > 0){
				   			this.questionTimer--;
				   		}	

					if (this.questionTimer === 0){
				   			clearInterval(this.clock);				   			
				   			this.timeOut();
				   		}

				   	$('.timer').html(this.questionTimer);
				   	
				   },

				   timer: function(){
				   	this.clock = setInterval(this.countDown.bind(this), 1000);
				   },

				   questionIterator: function(){
				   	if (this.questionCounter < questionArray.length){
				   		this.questionCounter++;
				   		this.generateHTML();
				   		this.questionTimer = 10;
				   		this.timer();
				   	}
				   	 else {

				   	 	this.endScreen();
				   	 }

				   },

				   generateHTML: function(){
				   	$('.mainArea').html("<p class='text-center'> Time Remaining: <span class='timer'></span></p>"+
				   						"<p class='text-center'>" + questionArray[this.questionCounter].question + "</p>"+
				   						"<p class='answer'>" + questionArray[this.questionCounter].choices[0] + "</p>"+
				   						"<p class='answer'>" + questionArray[this.questionCounter].choices[1]+"</p>"+
				   						"<p class='answer'>" + questionArray[this.questionCounter].choices[2]+"</p>"+
				   						"<p class='answer'>" + questionArray[this.questionCounter].choices[3]+"</p>");
				   	
				   },

				   correctAnswer: function(){
				   	 this.correctAnswerCounter++;
				   	 $('.mainArea').html("<p class='text-center'>Time Remaining: <span class='timer'>" + this.questionTimer + "</span></p>"
				   	  + "<p class='text-center'>Correct! The answer is: " + questionArray[this.questionCounter].answer + "</p>");

				   	 setTimeout(this.questionIterator.bind(this), 4000);
				   },

				   wrongAnswer: function(){
				   	this.wrongAnswerCounter++;
				   	$('.mainArea').html("<p class='text-center'>Time Remaining: <span class='timer'>" + this.questionTimer + "</span></p>"
				   	  + "<p class='text-center'>Incorrect! The correct answer is: " + questionArray[this.questionCounter].answer + "</p>");

				   	 setTimeout(this.questionIterator.bind(this), 4000);

				   },

				   timeOut: function(){
				   	this.unansweredCounter++;
				   	$('.mainArea').html("<p class='text-center'>Time Remaining: <span class='timer'>" + this.questionTimer + "</span></p>"
				   	  + "<p class='text-center'>Time's up! The correct answer is: " + questionArray[this.questionCounter].answer + "</p>");

				   	setTimeout(this.questionIterator.bind(this), 4000);
				   },

				   answerChecker: function(){
				   	if($('.answer').html() === questionArray[questionCounter].answer){
				   		clearInterval(this.timer);
				   		this.correctAnswer();
				   	}
				   	else{
				   		clearInterval(this.timer);
				   		this.wrongAnswer();
				   	}
				   },

				   endScreen: function(){
				   	$('.mainArea').html("<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + this.questionTimer + "</span></p>" + 
				   						"<p class='text-center'>All done, here's how you did!</p>" + 
				   						 "<p class='summary-correct'>Correct Answers: " + this.correctAnswerCounter + "</p>" + 
				   						 "<p>Wrong Answers: " + this.wrongAnswerCounter + "</p>" + 
				   						 "<p>Unanswered: " + this.unansweredCounter + "</p>" + 
				   						 "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>");
				   }





};



$(document).ready(function() {

triviaGame.initialize();

$('.start-button').on('click', function(event){
	triviaGame.generateHTML();
	triviaGame.timer();
	});

$('.answer').on('click', function(event){
	triviaGame.answerChecker();

});

$('.reset-button').on('click', function(event){
	triviaGame.reset();
});

});