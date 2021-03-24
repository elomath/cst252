/**
 * Author:    Everett Lomath
 * Created:   3/22/2021
 * (c) Copyright by Blub Corp.
 **/

// This is the OLD class methoc
/*
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
*/

// This is the NEW class method
class Vehicle {
  constructor (make, model, year, color, extras, name) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.extras = extras;
    this.name = name;
  }
  info() {
      return this.make + "  " + this.model+ "  " + this.year + "  " +
      this.color + " with " + this.extras + " called " + this.name;
  }
}

var vehicles = [];

vehicles.push(new Vehicle("Shwinn", "LeToure", 1976, "gold", "Brookes saddle", "bike"));
vehicles.push(new Vehicle("Ford", "Taurus", 1995, "Rusty", "Torn seats and broken radio", "Rust Bucket"));

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  var newEl = document.createElement("li");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);
}


console.log(bike);
console.log(bike.info());
