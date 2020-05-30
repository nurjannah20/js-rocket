// JavaScript Document

var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = "body-state"+state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;
	
	if (state == 2) { // Countdown
		timer = setInterval(function () {
			countdownNumber = countdownNumber-1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			if (countdownNumber <= 0) { //Instead of <= 0, changed it to <= -2 so that Lift Off! can appear after countdown reaches 0.
				changeState(3); // Lift Off!
			}
		}, 1000)	
	} else if (state == 3) {
		var success = setTimeout(function () {
			var randomNumber = Math.round(Math.random()*10);
			
			console.log('randomNumber: '+randomNumber);
			
			if (randomNumber > 5) {
				changeState(4); // Well Done!
			} else {
				changeState(5); // Oh No!!!
			}
		}, 2000)
	}
}