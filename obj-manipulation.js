myArr = {
    name: 'Kolade',
    skin: 'Black',
    class: 'Jss-2',
    tribe: 'Yoruba',
    address: 'Surulere',
    hobbies: ['RPG', 'Football']
}

shefene = {
    rice: 2000,
    yam: 3000,
    beans: 1000,
    oil: 3000,
    spice: 1000,
    pepper: 500
}

// Return the properties of an object in an array
let getProp = Object.keys(myArr);
// console.log(getProp);
let capitalizedProps = getProp.map(prop => prop.toUpperCase());
// console.log(capitalizedProps);

// Return the values of an object in an array
let getValue = Object.values(shefene);
// console.log(getValue)
let sumValue = getValue.reduce((price, total) =>
    (total + price), 0);
// console.log(sumValue)
let getFood = Object.entries(shefene);
console.log(getFood);

let swapFood = Object.fromEntries(getFood);
console.log(swapFood);