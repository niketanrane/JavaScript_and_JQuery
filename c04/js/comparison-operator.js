// author: Niketan Rane

var pass = 50;
var score = 90;

var hasPassed = score >= pass;

var el = document.getElementById('answer');
el.textContent = 'Level Passed: ' + hasPassed;

