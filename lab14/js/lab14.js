/**
 * Author:    Everett Lomath
 * Created:   3/22/2021
 * (c) Copyright by Blub Corp.
 **/

function Vehicle(make, model, year, color, extras) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.info = function() {
    return this.make + "  " + this.model+ "  " + this.year + "  " + this.color + " with " + this.extras;
  }
}

var vehicles = [];

vehicles.push(new Vehicle("Shwinn", "LeToure", 1976, "gold", "Brookes saddle"));
vehicles.push(new Vehicle("Ford", "Taurus", 1995, "Rusty", "Torn seats and broken radio"));

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  var newEl = document.createElement("li");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);
}


console.log(bike);
console.log(bike.info());
