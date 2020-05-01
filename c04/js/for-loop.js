// author: Niketan Rane

var scores = [24, 32, 17];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = '';
var i;

for (i=0; i<arrayLength; i++){
    msg += 'Round ' + (i + 1) + ': ';
    msg += scores[i] + '<br>';
}

var el = document.getElementById('answer');
el.innerHTML = msg;



