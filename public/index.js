var buttonCounter = 0;

var handleButtonClick = function() {
  var divTag = document.querySelector('#map');
  buttonCounter++;

}

var app = function() {
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

}

window.onload = app;