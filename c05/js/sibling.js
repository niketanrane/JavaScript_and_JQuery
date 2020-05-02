// author: Niketan Rane 

var item = document.getElementById('two');
var prevItem = item.previousSibling;
var nextItem = item.nextSibling;

prevItem.className = 'complete';
nextItem.className = 'cool';