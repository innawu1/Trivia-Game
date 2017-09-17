var question1 = { question: '"Torchwood" is an anagram and spin-off of what popular British sci-fi series?',
				  choices: ["Doctor Who", "Red Dwarf", "Primeval", "Cold Lazarus"],
				  answer: 'Doctor Who'	  	
				};

var question2 = { question: 'Star Trek: The Next Generation originally aired in what year?',
				  choices: ['1991', '1979', '1987', '1995'],
				  answer: '1987'				  	
				};

var question3 = { question: 'Bruce Willis played a convict turned time traveler in what 1995 movie?',
				  choices: ['Die Hard', '12 Monkeys', 'The Sixth Sense', 'The Fifth Element'],
				  answer: '12 Monkeys'
				};

var question4 = { question: 'In the movie "Back to the Future", what speed did the DeLorean need to reach in order to achieve time travel?',
				  choices: ['105 mph', '72 mph', '207 mph', '88 mph'],
				  answer: '88 mph'
				};

var question5 = { question: 'Which breakaway hit was published as part of a collection by Valve, in order to appease customers who were waiting for the next Half Life game?',
				  choices: ['Team Fortress', 'Portal', 'Counter-Strike', 'Left 4 Dead'],
				  answer: 'Portal'
				};

var question6 = { question: 'Which of these characters was not a founding member of The Avengers?',
				  choices: ['Iron Man', 'Thor', 'Captain America', 'The Hulk'],
				  answer: 'Captain America'
				};

var question7 = { question: 'Which famous Batman villain did not originally appear in the comic books, but on TV instead?',
				  choices: ['Harley Quinn', 'Bane', 'Joker', 'Two-Face'],
				  answer: 'Harley Quinn'
				};

var question8 = { question: 'In what year did Harry Potter first attend Hogwarts?',
				  choices: ['1994', '2000', '1991', '1998'],
				  answer: '1991'
				};

var question9 = { question: 'According to The Hitchiker’s Guide to the Galaxy, what is the answer to the ultimate question of life, the universe, and everything?',
				  choices: ['42', 'Pi', 'Cats', 'Water'],
				  answer: '42'
				};

var question10 = { question: 'By the early 1940s, J.R.R. Tolkein’s The Lord of the Rings trilogy was published in most European countries—what is the most notable exception?',
				  choices: ['France', 'England', 'Italy', 'Germany'],
				  answer: 'Germany'
				};

var question11 = { question: 'Which of these 1980s sci-fi films is getting a sequel in October of 2017?',
				  choices: ['Blade Runner', 'Aliens', 'RoboCop', 'The Terminator'],
				  answer: 'Blade Runner'
				};

var question12 = { question: 'Which of these video games is revered as the best selling game of all time?',
				  choices: ['Halo', 'Minecraft', 'Tetris', 'The Legend of Zelda: Ocarina of Time'],
				  answer: 'Tetris'
				};

var question13 = { question: 'When Mario first appeared, he was known by a different name. What was it?',
				  choices: ['Donkey Kong', 'Jumpman', 'Leonardo', 'Luigi'],
				  answer: 'Jumpman'
				};

var question14 = { question: 'Which video game company made handheld gaming popular, and continues to lead that market today?',
				  choices: ['Atari', 'Sega', 'SNK', 'Nintendo'],
				  answer: 'Nintendo'
				};

var question15 = { question: 'Which of these Marvel characters was not created or co-created by Stan Lee?',
				  choices: ['Ant-Man', 'Mr. Fantastic', 'Black Widow', 'Wolverine'],
				  answer: 'Wolverine'
				};

var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, 
					 question9, question10, question11, question12, question13, question14, question15];

var triviaGame = { questionCounter: 0,
				   correctAnswerCounter: 0,
				   wrongAnswerCounter: 0,
				   unansweredCounter: 0,
				   questionTimer: 20,
				   timerRunning: false,
				   clock: "",
 
				   initialize: function(){
				   this.questionCounter = 0;
				   this.correctAnswerCounter = 0;
				   this.wrongAnswerCounter = 0;
				   this.unansweredCounter = 0;
				   this.questionTimer = 20;
				   $('.mainArea').html("<button type ='button' class='btn btn-default btn-lg btn-block start-button'>Start Game</button>");
				   },

				   reset: function(){
				   this.questionCounter = 0;
				   this.correctAnswerCounter = 0;
				   this.wrongAnswerCounter = 0;
				   this.unansweredCounter = 0;
				   this.questionTimer = 20;
				   this.generateHTML();
				   this.timer();
				   },

				   // Function that controls the
				   timer: function(){
				   	//Sets clock parameter to perform
				   	this.clock = setInterval(countDown, 1000);

				   	function countDown(){
				   	if (triviaGame.questionTimer > 0){
				   			triviaGame.questionTimer--;
				   		}	

					if (triviaGame.questionTimer === 0){
				   			clearInterval(triviaGame.clock);				   			
				   			triviaGame.timeOut();
				   		}

				   	$('.timer').html(triviaGame.questionTimer);
				   	
				   	}

				   },

				   questionIterator: function(){
				   	if (triviaGame.questionCounter < (questionArray.length - 1)){
				   		triviaGame.questionCounter++;
				   		triviaGame.generateHTML();
				   		triviaGame.questionTimer = 20;
				   		triviaGame.timer();
				   	}
				   	 else{

				   	 	triviaGame.endScreen();
				   	 }

				   },

				   //Method that generates the HTML for the quiz questions
				   generateHTML: function(){
				   	$('.mainArea').html("<p class='text-center'> Time Remaining: <span class='timer'>20</span></p>"+
				   						"<p class='text-center'>" + questionArray[this.questionCounter].question + "</p>"+
				   						"<p class='answer'>" + questionArray[this.questionCounter].choices[0] + "</p>"+
				   						"<p class='answer'>" + questionArray[this.questionCounter].choices[1]+"</p>"+
				   						"<p class='answer'>" + questionArray[this.questionCounter].choices[2]+"</p>"+
				   						"<p class='answer'>" + questionArray[this.questionCounter].choices[3]+"</p>");
				   		
				   },

				   //Method that displays correct answer message when the user selects the correct answer
				   correctAnswer: function(){
				   	 this.correctAnswerCounter++;
				   	 $('.mainArea').html("<p class='text-center'>Time Remaining: <span class='timer'>" + this.questionTimer + "</span></p>"
				   	  + "<p class='text-center'>Correct! The answer is: " + questionArray[this.questionCounter].answer + "</p>");

				   	 setTimeout(triviaGame.questionIterator, 4000);
				   },

				   //Method that displays wrong answer message when the user selects the wrong answer
				   wrongAnswer: function(){
				   	this.wrongAnswerCounter++;
				   	$('.mainArea').html("<p class='text-center'>Time Remaining: <span class='timer'>" + this.questionTimer + "</span></p>"
				   	  + "<p class='text-center'>Incorrect! The correct answer is: " + questionArray[this.questionCounter].answer + "</p>");

				   	 setTimeout(triviaGame.questionIterator, 4000);

				   },

				   //Method that displays timeout message when the user runs out of time
				   timeOut: function(){
				   	this.unansweredCounter++;
				   	$('.mainArea').html("<p class='text-center'>Time Remaining: <span class='timer'>" + this.questionTimer + "</span></p>"
				   	  + "<p class='text-center'>Time's up! The correct answer is: " + questionArray[this.questionCounter].answer + "</p>");

				   	setTimeout(triviaGame.questionIterator, 4000);
				   },

				   //Method that displays user stats at the end of the quiz
				   endScreen: function(){
				   	$('.mainArea').html( "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + this.questionTimer + "</span></p>" + 
				   						 "<p class='text-center'>All done, here's how you did!</p>" + 
				   						 "<p>Correct Answers: " + this.correctAnswerCounter + "</p>" + 
				   						 "<p>Wrong Answers: " + this.wrongAnswerCounter + "</p>" + 
				   						 "<p>Unanswered: " + this.unansweredCounter + "</p>" + 
				   						 "<p class='text-center'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>");
				   }





};



$(document).ready(function() {

triviaGame.initialize();

$('.start-button').on('click',function(){
	triviaGame.generateHTML();
	triviaGame.timer();
});

//Click event for answer selection
$(document).on('click','.answer', function(){
		if($(this).text() === questionArray[triviaGame.questionCounter].answer){
			clearInterval(triviaGame.clock);
			triviaGame.correctAnswer();
		}
		else{
			clearInterval(triviaGame.clock);
			triviaGame.wrongAnswer();
		}
	});

$(document).on('click', '.reset-button', function(){
	triviaGame.reset();
	});

});