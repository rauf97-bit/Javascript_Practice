/* //=================== Classes in Javascript =========================

class Car {
    constuctor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

// let SportsCar = new Car ('BMW', 'X-series', '2009');
let SportsCar = new Car ();
SportsCar.make = 'X-series';
SportsCar.model = 'BMW';
SportsCar.year = 2009;
console.log(SportsCar);

class Benz extends Car{

}
Benz.make = 'German';
Benz.model = 'Sport';
Benz.year = '2020';
console.log(Benz.name);
console.log(Benz.prototype); */

// Only change code below this line

class Thermostat {
  constructor(fahr) {
    this.fahr = (fahr - 32) * (5 / 9);
  }
  get temperature() {
    return this.fahr;
  }
  set temperature(tempz) {
    this.fahr = tempz;
    return this.fahr;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log(temp);
