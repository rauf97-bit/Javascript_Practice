
//===== Timed Function =============
setTimeout(function() {
    console.log('hi');},
     1000);



// ========== Looped timed fxn ===============
let counter = 0;
function setTimer() {
    setTimeout(function() {
    console.log('hi' + ' ' + counter++);},
    1000);
    // setTimer();
};

setTimer();
setTimer();
setTimer();
setTimer();


// ======== Immediate Fxn =====================

(function()  {
    console.log('hi');
})();

// ======= Function Call ====================

let obj = {
    fullName : function (rank, city) {
        return rank + ' ' + this.firstName + ' ' + this.lastName + ' of ' + city + ' city.' ;
    }
}

maggot1 = {
    firstName : 'Sagir',
    lastName : 'Tahir'
};
maggot2 = {
    firstName : 'Ibrahim',
    lastName : 'Bakare'
}

console.log(obj.fullName.call(maggot1, 'AirMarshal', 'Kaduna'));
console.log(obj.fullName.call(maggot2, 'Seaman', 'Port-Harcourt'));

// =========== Simple Function ==================
// A function that checks for the divisibility of a Number

function checkDivisibility(divider, divisor) {
    if (!divider || !divisor) {
        return 'Please input a valid number  not equal to zero ';
    }
    if (divider % divisor === 0) {
        return 'It is divideable';
    } else {
        return 'It is not divideable';
    }
    
}

checkDivisibility(25, 5);

