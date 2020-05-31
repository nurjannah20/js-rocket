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
			
			if (countdownNumber > 4 && countdownNumber <=7) {
				// be nervous
				document.getElementById('nervous').className = 'nervous show';
			} else {
				document.getElementById('nervous').className = 'nervous';
			}
			
			if (countdownNumber <= 4 && countdownNumber >1) {
				// can't wait
				document.getElementById('cant-wait').className = 'cant-wait show';
			} else {
				document.getElementById('cant-wait').className = 'cant-wait';
			}
			
			if (countdownNumber <= 0) { //Instead of <= 0, changed it to <= -2 so that Lift Off! can appear after countdown reaches 0.
				changeState(3); // Lift Off!
			}
		}, 500)	
	} else if (state == 3) {
		var success = setTimeout(function () {
			var randomNumber = Math.round(Math.random()*10);
			
			console.log('randomNumber: '+randomNumber);
			
			if (randomNumber > 4) {
				changeState(4); // Well Done!
			} else {
				changeState(5); // Oh No!!!
			}
		}, 2000)
	}
}