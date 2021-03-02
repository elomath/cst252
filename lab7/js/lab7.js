/**
 * Author:    Everett Lomath
 * Created:   3/1/2021
 * (c) Copyright by Blub Corp.
 **/

// sortUserName - a function that takes user input and sorts Letters
// of their name
function sortUserName() {
    var userName = window.prompt("Hi, please tell me your name so I can fix it.");
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
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
