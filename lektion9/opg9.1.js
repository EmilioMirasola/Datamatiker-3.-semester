'use strict'

function Vehicle(speed) {
    this.speed = speed;
}

Vehicle.prototype.toString = function () {
    return "speed:" + this.speed
}

function Car(numberOfWheels, gasDriven) {
    Vehicle.call(this, 180);
    this.numberOfWheels = numberOfWheels;
    this.gasDriven = gasDriven;
}

Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.constructor = Car

Car.prototype.toString = function () {
    return Object.getPrototypeOf(this).toString() + ", numberOfWheels: " + this.numberOfWheels + ", gasDriven: " + this.gasDriven
}

function Bicycle(numberOfWheels) {
    Vehicle.call(this, 30);
    this.numberOfWheels = numberOfWheels;
}

//Bicycle.prototype = Object.create(Vehicle.prototype)
Bicycle.prototype = Object.create(Object.prototype)
//Bicycle.prototype.constructor = Bicycle

Bicycle.prototype.toString = function () {
    console.log("this", this)
    console.log("obj pt this", Object.getPrototypeOf(this))
    return Object.getPrototypeOf(this).toString() + ", numberOfWheels: " + this.numberOfWheels;
}

const bicycle = new Bicycle(2)

const car = new Car(4, true);

console.log(bicycle.toString())
console.log(Bicycle.prototype)
console.log(Object.getPrototypeOf(bicycle))



