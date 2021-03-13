/**
 * Author:    Everett Lomath
 * Created:   2/28/2021
 * (c) Copyright by Blub Corp.
 **/

// Use getElementById() to find your output <div> and assign it to a variable outputEl

oldElement = document.getElementById("output");

// Create a new element with document.createElement("p") and assign it to a variable new1El

newElement = document.createElement("p");

// Append both new elements one at a time using appendChild()

oldElement.appendChild(newElement);

newElement.id = "new1El";

// Change the html attribute of new1El to say something new.

newElement.innerHTML = "This is a new element.";

newElement.style.fontSize = "30pt";


// Create another new element and assign it to a variable new2El

newElement = document.createElement("p");

// Append both new elements one at a time using appendChild()

oldElement.appendChild(newElement);

newElement.id = "new2El";

// Change the html attribute of new2El to say something else.

newElement.innerHTML = "This is a secondary new element.";

newElement.style.fontSize = "30pt";


// Change the css attributes of at least two elements of your page

new1El.style.color = "red"
new2El.style.color = "blue"
