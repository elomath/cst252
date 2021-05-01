/**
 * Author:    Everett Lomath
 * Created:   5/1/2021
 * (c) Copyright by Blub Corp.
 **/

var URL = "https://xkcd.com/info.0.json";

var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";

function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);
  //
  //
  $.ajax({
    //
    url: ourURL,
    //
    type: "GET",
  })
  //
  .done(function(data){
    //
    var imageUrl = data.img;
    var title = data.title;
    var alt = data.alt;
    var comicNum = data.num;
    var html = <div id="imageblock">
        <h2>${title}</h2>
        <img src"${imageUrl}" title="${alt}""></br>
        <button id="prev">Previous</button><button id="next"></button>
      </div>
      console.log("My new html: \n", html);
      $("output").html(html);

      $("#prev").click(function(){
        getComic(comicNum - 1);
      });

      $("#next").click(function(){
        getComic(comicNum + 1);
      });
  })
  .fail(function(){
    console.log("^^ Please isnore this error. It's okay.");
    console.log("Have a nice day!");
  })
}
