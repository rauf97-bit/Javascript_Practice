// =========== Using Natives to form constructors

let CarDate = function (make, year, model)  {
    this.make = make;
    this.year = year;
    this.model = model;

}

let carDetz = new CarDate ( 'Benz', '2009', 'X-edition');
console.log(carDetz);
console.log(typeof carDetz);

// ==================================================

function MyFxn() {
    console.log('I am still here');

}

let myFunc = new MyFxn();
console.log(typeof myFunc);
console.log(myFunc);

//====================================================

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  /* 
  Person.prototype.fullName = (name) => { return this.firstName + ' ' + this.lastName }; 
  */
 
  Person.prototype.nationality = "English";
  
  var myFather = new Person("John", "Doe", 50, "blue");

  console.log(Person.nationality);
  console.log(myFather.nationality);
  console.log(myFather.fullName());