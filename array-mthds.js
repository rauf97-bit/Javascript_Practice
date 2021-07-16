let abba = [ 4, 5, 6, 7, 8, 9];
let affan = [1, 2, 3, 4, 5, 6, 6, 9, 8, 77, 34, 33];

let baba = ['hello', 'world', 'bye', 'duniya', 'heaven'];
let kaka = ['lolo', 'nene', 'anty', 'sisi', 'kola'];

let comB = abba.concat(affan);
console.log(comB);
console.log(affan.sort( (a, b) => { return a - b}));
console.log(baba.reverse());
console.log(baba.sort());

console.log(kaka.join('~'));
console.log(kaka.shift());
console.log(kaka);
kaka.unshift('lolo');
console.log(kaka);
console.log(kaka.indexOf('anty'));

var grtn = kaka.forEach((name) => { console.log(`Howdy ${name}`);});
console.log(grtn);

var lilNums = affan.filter((x) => { if ( x <= 10) return x;});
console.log(lilNums);

var numChk = affan.every((num) =>  num >= 30 );
var numChk2 = affan.every((num) =>  num >= 300 );
console.log(numChk);
console.log(numChk2);

//===================== Destructuring ====================
let a, b, c, d, e;

let arr = ['kola', 'shade', 'bidemi', 'kim', 'lisa'];
[a, b, c, e, d] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// =============== Another 1 =============
let a, b, remnant;

let arr = ['kola', 'shade', 'bidemi', 'kim', 'lisa'];

[a,b, ...remnant] = arr;
console.log(a);
console.log(b);
console.log(remnant);

// ================ Another 1 ==============

let year, model;
({year, model} = {
    make : 'BMW',
    model : 'X-edition',
    year : 2020,
    idNo : 'abc123'
});

console.log(year);
console.log(model);


