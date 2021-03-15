/**
 * Author:    Everett Lomath
 * Created:   2/28/2021
 * (c) Copyright by Blub Corp.
 **/

 // If the number is a multiple of 3, print “Fizz” instead of the number.

 // If the number is a multiple of 5, print “Buzz” instead of the number.

 // For numbers which are multiples of both 3 and 5, print “FizzBuzz”

 //given a number and an object that looks like this:
 //     {3: "Fizz",5:"Buzz", 7: "Boom" }

/*function fizzBuzzBoom(maxNums, factorObj) {
  // iterate over all of the numbers
  for (var num=0; num<maxNums; num++) {
      // reset ouput string
      var outputStr = "";
      // iterate over the factors we got from the html
      for (var factor in factorObj){
          // check to see if this num is a multiple of factors
          if (num % factor == 0){
            // if yes, than add the text to output string
            outputStr += factorObj[factor];
          }
        }
        // now if we have words in outputStr, format it like this " - FizzBuzz!"
        if (outputStr) {
          outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
      }
    }

for (i=1; i <= 100; i++) {
    if (i%35 == 0) {
       console.log("BoomFizz");
    } else if (i%21 == 0) {
       console.log("BoomBuzz");
    } else if (i%15 == 0) {
        console.log("FizzBuzz");
    } else if (i%7 == 0) {
        console.log("Boom");
    } else if (i%5 == 0) {
        console.log("Fizz");
    } else if (i%3 == 0) {
        console.log("Buzz");
    } else {
      console.log(i);
    }
}

str += "Fizz";
var newEl = document.createElement("p");
newEl.innerHTML = str;
document.getElementById("output").appendChild(newEl);*/


//Version 2

document.getElementById("button").addEventListener("click",function(){

  var outputEl = document.getElementById("output");

  var lastNum = document.getElementById("input").value;

  if (lastNum == ""){
    lastNum = 10;
  }

  var factor1 = 3;
  var text1 = "Fizz";
  var factor2 = 5;
  var text1 = "Buzz";
  var factor3 = 7;
  var text1 = "Boom";
  var lastNum = 200;
  /*var lastNum = 200*/;

  for (i=1; i<=lastNum; i++) {
    str = '';
    if (i % factor1 == 0){
      str += "Fizz";
    }
    if (i % factor2 == 0){
      str += "Buzz";
    }
    if (i % factor3 == 0){
      str += "Boom";
    }
    if (str ==  ""){
      str = i;
    } else {
      str +='!';
    }
    var newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
  }

});
