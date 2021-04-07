/**
 * Author:    Everett Lomath
 * Created:   3/22/2021
 * (c) Copyright by Blub Corp.
 **/


$("#output")
//add event listener to button
$("#thing1-button").click(function(){
  $("#thing2-button").toggleClass("george");
})

//add event listener to button
$("#thing2-button").click(function(){
  $("#thing1-button").toggleClass("fred");
})

$("#submit").click(function(){
	// pure JS
	//var fullname = document.getElementById("full-name").value;

  // jQuery
  var fullname = $("#fullname").val();
  $("#replace").html(fullname + "'s");
  $("#thing1-button").html(fullname + " 1");
  $("#thing2-button").html(fullname + " 2");

})
