$(document).ready(function() {
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

var guess;
var target;
var range=0;

target = Math.floor(Math.random()*100);

	$('#guessButton').click(function() {

var noGuess = parseInt($('#count').text());
$('#count').text(noGuess + 1);

	guess = $("#userGuess").val();

	if (guess > target) {
   	range = guess - target;
	}
	else if (target > guess) {
   	range = target - guess;
	}
	else if (guess = target){
	alert("You're Right!");
	return;
	}

	if(range<5){
		$("#feedback").text("Burn!!!!");
	}
	else if(range>=5 && range<=10){
		$("#feedback").text("Hot Hot!");
	}
	else if(range>10 && range<=20){
		$("#feedback").text("Hot");
	}
	else if(range>20 && range<=30){
		$("#feedback").text("Warm");
	}
	else if(range>30 && range<=40){
		$("#feedback").text("Cold");
	}
	else if(range>40 && range<=50){
		$("#feedback").text("Too Cold");
	}
	else if (range >50) {
	}
	else if (guess = target) {
		$("#feedback").text("You're Right!");	
	}

	event.preventDefault();

	$("ul#guessList").append("<li class='guessBox'>" + userGuess.value + "</li>");

		
	});
});

