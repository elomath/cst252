/**
 * Author:    Everett Lomath
 * Created:   2/28/2021
 * (c) Copyright by Blub Corp.
 **/

 // Define Variables
myTransport = ["Chevy Camero", "bike", "rides from friends", "walking"
  ];

myMainRide = {
  make  = "Chevy",
  model = "Camero",
  color = "yellow",
  year = 2007,
  age : function() {
    return 2019 - age;
  }
}

// output
document.writeln("Kinds of transportation I use: ", my transport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
