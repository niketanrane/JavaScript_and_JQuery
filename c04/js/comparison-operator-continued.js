// author: Niketan Rane

var score1 = 50;
var score2 = 90;

var highScore1 = 90;
var highScore2 = 30;

var comparison = ((score1 + score2) <= (highScore1 + highScore2));

var el = document.getElementById('answer');
el.textContent = 'Level Passed: ' + comparison;

