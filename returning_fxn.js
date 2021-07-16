// ============ Function returning another function ================

function sayHi() {
    console.log('Hi Everyone');
}

function returner() {
    return sayHi();
}
returner();


//=========================== ================================
function rebound() {
    return function sayHi() {
        console.log('Hi Everyone');
    }
}

let myFunc = rebound();
myFunc();
