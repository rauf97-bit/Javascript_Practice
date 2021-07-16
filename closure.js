// =========               ================

function sayHi(mssg) {
    return function () {
        console.log('howdy ' + mssg);
    }
}

let kola = sayHi('kola');
let lisa = sayHi('lisa');
let bidemi = sayHi('bidemi');

kola();
lisa();
bidemi();