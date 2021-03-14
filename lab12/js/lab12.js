/**
 * Author:    Everett Lomath
 * Created:   2/28/2021
 * (c) Copyright by Blub Corp.
 **/

 //If the number is a multiple of 3, print “Fizz” instead of the number.

 //If the number is a multiple of 5, print “Buzz” instead of the number.

 //For numbers which are multiples of both 3 and 5, print “FizzBuzz”

for (i=1; i <= 200; i++) {
    if (i%35 == 0) {
       console.log("BoomFizz");
    } else if (i%3 == 0) {
        console.log("Buzz");
    } else if (i%5 == 0) {
        console.log("Fizz");
    } else if (i%7 == 0) {
        console.log("Boom");
    } else if (i%15 == 0) {
        console.log("FizzBuzz");
    } else if (i%21 == 0) {
        console.log("BoomBuzz");
    } else {
      console.log(i);
    }
}

str += "Fizz";
var newEl = document.createElement("p");
newEl.innerHTML = str;
document.getElementById("output").appendChild(newEl);
