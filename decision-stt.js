
// =========== If else Statement =============
let x = 9;
if (x > 9) {
    console.log('Big Number')
} else if (x < 9 ) {
    console.log('Small Number')    
}   else{
    console.log('It"s equal to 9')
};

// ============= Switch case Statement ===========

let x = 'naruto';

switch (x) {
    case 'naruto':
        console.log('Kyuubi'); 
        break;
    case 'sasuke':
        console.log('Sharingan');
        break;
    case 'sakura':
        console.log('nothing');
        break;
    default:
        console.log('Tribe-related');
        break;
}

// ========== Ternary Operator ==========

let x = 10;
let y = 9;

let ansa = (x == y) ? 'equal' : 'not equal' ;
console.log(ansa);
