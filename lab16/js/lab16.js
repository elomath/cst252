/**
 * Author:    Everett Lomath
 * Created:   3/22/2021
 * (c) Copyright by Blub Corp.
 **/

$("#output")

$("#output").append("<button id='my-button'>Press Me!</button>")


// find element, set up an alert
$("#my-button").click(function(){
    alert("Thanks for pressing me.")
});


// change button to color green
$("#my-button").css("color", "green");
