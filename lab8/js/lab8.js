/**
 * Author:    Everett Lomath
 * Created:   3/2/2021
 * (c) Copyright by Blub Corp.
 **/

 function isEven(x){
     return (x % 2 == 0);
 }

 // test function
 console.log("Is 1 even?", isEven(1));
 console.log("Is 2 even?", isEven(2));

 array = [40,15,25,5,10,30,20,35]
 console.log("My array", array);

 var result = array.map(isEven);
 // should return [false, true, false, true, false, true, false, true]
console.log("Array evenness test:", result);

var result = array.map(function(x){
     return x ** 0.5;
 })
// should return [5,10,15,20,25,30,35,40]
console.log("Squareroot of array:", result);
