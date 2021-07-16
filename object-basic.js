// ============= Simple Object ================

let carDate = {
    volvo : 2001,
    toyota : 2002,
    benz : 2003,
    mazda : 2004,
    bentley : 2005
}

console.log(carDate.bentley);
console.log(carDate.mazda);
console.log(carDate.benz);

// ============= A bit complex ===================


let carSpec = {
    name : 'bentley',
    model : 'Chrysler',
    year : 2006,
    body : { hard : 'red', soft : 'green'},
    brief : function () {
        return this.name + this.year;
    }
}
console.log(carSpec.name);
carSpec.colour = 'Red';
console.log(carSpec.brief());
console.log(carSpec);

// ================== Object mixed with Arrays ======

let stdList = {
    ss1 :  ['hello', 'world', 'bye', 'duniya', 'heaven'],
    ss2 :  ['hello', 'world', 'duniya', 'heaven'],
    ss3 :  ['hello', 'bye', 'duniya', 'heaven'],
}

console.log(stdList.ss1[0]);
console.log(stdList.ss2[1]);
console.log(stdList.ss3[2]);

 //# For in Objects

 let carDate = {
    volvo : 2001,
    toyota : 2002,
    benz : 2003,
    mazda : 2004,
    bentley : 2005
}
let txt;
for (const x in carDate) {
    if (carDate.hasOwnProperty(x)) {
        const txt = carDate[x];
        console.log(txt);
        
    }
}