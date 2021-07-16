// ========= For Loop ================
for (i = 0; i <= 10; i++){
    console.log(i);
}

let arr = [42, 54, 67, 74, 86, 95];
for (let a = 0; a < arr.length; a++) {
    const c = arr[a];
    console.log(c);
}

let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
for (let d = 0; d < cars.length; d++) {
    const f = cars[d];
    console.log(f);
}


// ============= While loop ===========

let x = 1;
while (x < 10) {
    console.log(x);
    x++;
}


let x = 1;
while (x < 10) {
    console.log(x);
    x++;

    if (x == 6) break;
}
