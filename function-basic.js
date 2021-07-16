/*
function sayHi(){
    console.log('********************');
    console.log(' Hi World');
    console.log('********************');
}

sayHi();
*/

function sayHi(name){
    console.log('********************');
    console.log(' Hi ' + name);
    console.log('********************');
}

sayHi('Aliyah');
sayHi('Esther');
sayHi('Kolade');

function perCalc(figure){
    let result = figure * 0.1;
    return result;
}

let percentCalc = perCalc(100) + '%';
console.log(percentCalc);
