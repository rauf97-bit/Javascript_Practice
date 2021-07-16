/* 
DOM means Document Object Model 
It has 2 main methods which is classified into:
1. Method == action performed on an Element e.g getElementById
2. Propety == are values you set or change  e.g innerHTML
 */


let x = document.getElementById('intro');
function printIt() {
    document.getElementById('demo').innerHTML = x.innerHTML;
}

let y = document.getElementsByTagName('p');
document.getElementById('demo2').innerHTML = y[1].innerHTML;

let z = document.getElementsByClassName('duct');
document.getElementById('demo3').innerHTML = z[1].innerHTML;

let a = document.querySelectorAll('p.duct');
document.getElementById('demo4').innerHTML = a[1].innerHTML;

/* function greetn(yourname) {
    let text = 'Welcome to our first DOM manipulation class';
    console.log(`Hi ${yourname} ${text}`);
    if (yourname == '') {
     prompt('Please input name');
    }
}
 */ 
let xName;
do {
    xName = prompt('What is your name');
} while (!xName){
    let text = 'Hello';
    let xy = document.getElementById('demo5');
    xy.innerHTML = text + ' ' + xName.toUpperCase();
}