// author: Niketan Rane

var operation = 'multiplication';
var numToAdd = 3;
var i = 1;
var msg = '';

if (operation === 'addition'){
    while (i < 11){
        msg += i + ' + ' + numToAdd + ' = ' + (i + numToAdd) + '<br>';
        console.log(i);
        i++;
    }
}
else if (operation === 'multiplication'){
    while (i < 11){
        msg += i + ' x ' + numToAdd + ' = ' + (i * numToAdd) + '<br>';
        console.log(i);
        i++;
    }
}


var el = document.getElementById('blackboard');
el.innerHTML = msg;



