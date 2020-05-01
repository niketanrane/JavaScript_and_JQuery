// author: Niketan Rane 

var msg = '<h2>Browser Window</h2>';
msg += '<p>width: ' + window.innerWidth + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';

msg += '<h2>History</h2>';
msg += '<p>items: ' + window.history.length + '</p>';


msg += '<h2>Screen Width </h2>';
msg += '<p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;


alert('Current Page: ' + window.location);
// console.log(document.title);
// console.log(document.domain);
// console.log(document.URL);