// author: Niketan Rane 
var subTotal = (13 + 1) * 5;
var shipping = 0.5 * (13 + 1);

var total = subTotal + shipping;

var elSub = document.getElementById('subtotal');
elSub.textContent = subTotal;

var elSub = document.getElementById('shipping');
elSub.textContent = shipping;

var elSub = document.getElementById('total');
elSub.textContent = total;