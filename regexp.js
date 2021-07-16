//======== Using regular expression to find matches ===

let pattern = /xyx/;

console.log(typeof pattern);
console.log(pattern);

let wordplay = 'I love xyx all the time';

console.log(pattern.test(wordplay));
console.log(wordplay.search(pattern));
console.log(wordplay.replace(pattern, 'gaming'));
console.log(wordplay.replace('the time', 'weekends'));
//=====================





let pattern_ = /abuja/;
let word = 'The man from abuja is rich';
let testRun = function () {
    console.log(`Definately ${(pattern_.test(word) == true) ? word : 'we are wrong' }`);
}

console.log(testRun());