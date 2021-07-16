// Simple hover Challenge
let enlarge = document.querySelector('.circle');
enlarge.addEventListener('mouseenter', increase);
function increase() {
    enlarge.style.width = '400px';
    enlarge.style.height = '400px';
    enlarge.style.color = 'white';
    enlarge.style.transition = 'ease-in-out 2s';
}

enlarge.addEventListener('mouseleave', decrease);
function decrease() {
    enlarge.style.width = '200px';
    enlarge.style.height = '200px';
    enlarge.style.color = 'black';
    enlarge.style.transition = 'ease-in-out 2s';
}

let firstImg = document.querySelector('.top');
let secondImg = document.querySelector('.bottom');

firstImg.addEventListener('click', () => {
    if(secondImg.classList.contains('bottom')){
        secondImg.classList.add('active');
        firstImg.classList.remove('active');
    }
});


secondImg.addEventListener('click', () => {
    if(firstImg.classList.contains('top')){
        firstImg.classList.add('active');
        secondImg.classList.remove('active');
    }
});
/* 
secondImg.addEventListener('click', () => {
    if(firstImg.classList.contains('top')){
        firstImg.classList.add('active');
        secondImg.classList.remove('active');
    }
})
 */





// For, Foreach, Filter, Map, Sort & Reduce

let numArr = [24, 42, 36, 6, 50, 66, 64, 90, 28, 7, 34, 38];

let arrDB = [
    {name: 'Awal', position: 'first', DOB: 1987, age: 35, goto: 'mum'},
    {name: 'Sakina', position: 'second', DOB: 1989, age: 33, goto: 'dad'},
    {name: 'Farida', position: 'third', DOB: 1993, age: 27, goto: 'dad'},
    {name: 'Rauf', position: 'fourth', DOB: 1996, age: 25, goto: 'mum'},
    {name: 'Wahab', position: 'fifth', DOB: 1999, age: 22, goto: 'mum'},
    {name: 'Rufai', position: 'sixth', DOB: 2006, age: 15, goto: 'dad'},
    {name: 'Yesmin', position: 'seventh', DOB: 2013, age: 8, goto: 'dad'}
];

let nameIntro = document.querySelector('.fam_logs');
let mainData = arrDB.map(item => {
    return ` ${item.name} is ${item.age} years old ` ;
})
for (let i = 0; i < arrDB.length; i++) {
    let paste = document.createElement('h3');
    paste.textContent = mainData;
    nameIntro.appendChild(paste);    
}

/*
// Demonstrating using or for method
let displayArr = []
for (let i = 0; i < arrDB.length; i++) {
    displayArr.push(arrDB[i].name);
}
console.log(displayArr);

//Demonstrating using forEach method
arrDB.forEach((postn) => {console.log(postn.position)});
arrDB.forEach(postn => console.log(postn.position));
 */

//Demonstrating using the filter method

/* 
let mumPerson = arrDB.filter(function (person) {
    if (person.goto === 'mum') {
        return person; //return true
    }
});
let dadPerson = arrDB.filter(person => person.goto === 'dad');
console.log(mumPerson);
console.log(dadPerson);
*/

/* 
let big3 = arrDB.filter(ages => ages.age >= 27)
console.log(big3);

let small4 = arrDB.filter(function (ages) {
    if (ages.age <= 26) {
        return ages;
    }
});
console.log(small4);

let bigNum = numArr.filter(ages => ages >= 22);
console.log(bigNum);

let smallNum = numArr.filter( function (ages) {
    if (ages <= 22) {
        return true;
    }    
});
console.log(smallNum);
 */

// Demonstrating using the Map Method
/* 
let briefn = arrDB.map(person => `I am ${person.name} the ${person.position} born of popc`);
console.log(briefn);

let numCalc = numArr.map( num => num/2).filter(numz => numz <= 20);
let bigCalc = numArr.map(function (num) {return num * 2}).filter(function (num) {if(num <= 60){return num}});
console.log(numCalc);
console.log(bigCalc);
 */
//Demonstrating using Sort method

/* let ascending = numArr.sort((a, b) => b - a);
let decending = numArr.sort(function (a, b) {return a - b;});

console.log(ascending);
console.log(decending);
 */

let sorting = arrDB.sort( function (a, b) {
    if (b.DOB > a.DOB) {
        return  1;
    } else {
        return -1;
    }
})
console.log(sorting);

// Demonstrating using the Reduce method

let ageSum = 0
for (let i = 0; i < numArr.length; i++) {
    ageSum += numArr[i];
    
}
// let numAdd = numArr.reduce((total, num) => (total + num),0);

let numAdd = numArr.reduce(function (total, a) {
    return total + a;
}, 0);

console.log(numAdd);
console.log(ageSum);
