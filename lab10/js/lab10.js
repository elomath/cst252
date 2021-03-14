/**
 * Author:    Everett Lomath
 * Created:   3/3/2021
 * (c) Copyright by Blub Corp.
 **/

 var button = document.getElementById('my-button');
 button.addEventListener('click', function() {
     inputValue = document.getElementById('user-name').value;
     console.log("You input:", inputValue);
 });

 function sortUserName() {
   // split string to array
   var nameArray = "user-name".split('');
   console.log("nameArray =", nameArray);
   //sort the array
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);
   //join array back to a string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);
   return nameSorted;
}

// output
document.writeln("Oh hey, I've fixed your name: ",
 sortUserName(), "</br>");
