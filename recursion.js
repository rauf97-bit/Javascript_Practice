// Generating Summation Formula Using Recursion

function sumTotal(num) {
    if (num === 1){
        return 1;
    } else{
        return num + sumTotal(num - 1);
    }
}
console.log(sumTotal(6));

// Generating Factorial Formula Using Recursion

function factorial(num) {
    if (num === 1){
        return 1;
    } else{
        return num * factorial(num - 1);
    }
}
console.log(factorial(6));

// Generating Count-Up/Down Array using Recursion 

// CountUp
function countUp(num) {
    if (num < 1){
        return [];
    } else{
        let myArr = countUp(num - 1);
        myArr.push(num);
        return myArr;
    }
}

console.log(countUp(10));

//CountDown

function countDown(num) {
    if (num < 1){
        return [];
    } else{
        let myArr = countDown(num -1);
        myArr.unshift(num);
        return myArr;
    }
}

console.log(countDown(10));
