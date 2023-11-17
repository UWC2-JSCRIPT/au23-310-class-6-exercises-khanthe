/**
 * Car class
 * @constructor
 * @param {String} model
 */

class Car {
    constructor(model) {
        this.currentSpeed = 0;
        this.model = model;
    }
    accelerate() {
        this.currentSpeed++;
    }
    brake(){
        this.currentSpeed--;
    }
    toString() {
        return `Car model ${this.model} has a current speed of ${this.currentSpeed}`;
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const fiesta = new Car('Fiesta');

fiesta.accelerate();
fiesta.accelerate();
fiesta.brake();
console.log(fiesta.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car {
    constructor(model) {
        super(model);
        this.motor = 'electric';
    }
    accelerate(){
        super.accelerate();
        super.accelerate();
    }
    toString() {
        return `${this.model} has an ${this.motor} motor and a current speed of ${this.currentSpeed}`;
    }
}

const bolt = new ElectricCar('Bolt');

bolt.accelerate();
bolt.accelerate();
bolt.brake();
console.log(bolt.toString());