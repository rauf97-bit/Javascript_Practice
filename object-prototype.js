//==== Protoypes chain in Javascript

let carSpec = {
    name : 'bentley',
    model : 'Chrysler',
    year : 2006,
    body : { hard : 'red', soft : 'green'},
    brief : function () {
        return this.name + this.year;
    }
}

let miniBus = Object.create(carSpec);
miniBus.model = 'Family';
miniBus.name = 'cooper';

console.log(miniBus.brief());
console.log(miniBus.fullName());
console.log(Object.getPrototypeOf(miniBus));


carSpec.rating = 87;
console.log(miniBus.rating);

//======================================


