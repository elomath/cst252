/**
 * Author:    Everett Lomath
 * Created:   3/3/2021
 * (c) Copyright by Blub Corp.
 **/

var minXdelta = 25;
var maxXdelta = 100;
var minydelta = 25;
var maxydelta = 100;

var titleEl = document.getElementById("changeme");
console.log("Here's a title:", titleEl);

var buttonEl = document.getElementById("my-button");
console.log("Here's a button:", buttonEl);

var buttonEl = document.getElementById("better-button");
console.log("Here's another button:", buttonEl);

var inputEl = document.getElementById("my-input");
console.log("Here's a input field:", inputEl);

buttonEl.addEventListener("click", function(){
  var name = inputEl.value;
  //var name = prompt("What's your name?");
  console.log("Title element:", titleEl);
  titleEl.innerText = "Hello, " + name;
  inputEl.value = "";
})

betterEl.addEventListener("click", function(){
  alert("horray, you won!")
})

// add mouseover event for button
betterEl.addEventListener("mouseover", function(){
  console.log("Mouseover");
// pick random distance for x and y
  var xDelta = Math.floor(Math.random() * maxXdelta);
  var yDelta = Math.floor(Math.random() * maxydelta);
// pick random direction for x and y
  var xDir = Math.floor((Math.random() * 3) -1);
  var yDir = Math.floor((Math.random() * 3) -1);
// create vector
  var xDelta = xDelta * xDir;
  var yDelta = yDelta * yDir;
// get current position
  var currentX = betterEl.offsetLeft;
  var currenty = betterEl.offsetTop;
// calculate new position
  var newX = curX + xDelta;
  var newY = curY + yDelta;
// set new position
  betterEl.stlye.left = newX + "pr"
  betterEl.stlye.left = newX + "pr"
