/**
 * Author:    Everett Lomath
 * Created:   2/28/2021
 * (c) Copyright by Blub Corp.
 **/

// Return Gryffindoer, Ravenclaw, Slytherin and Hufflepuff
//depending on length and mod 4

function sortingHat(name) {

  var len = name.length;
  console.log("length:", len);

  var mod = len % 4;
  console.log("mod:", mod);

  if (mod == 0){
      return("Gryffindor");
  } else if (mod == 1) {
      return("Ravenclaw");
  } else if (mod == 2) {
      return("Slytherin");
  } else {
      return("Hufflepuff");
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortinghat(name);
  newText = "<p> The Sorting Hat has sorted you into" + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
