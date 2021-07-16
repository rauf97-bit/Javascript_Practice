//================= Example of invalid error response ============

let errEx = 7 * (Infinity/undefined);
console.log(errEx);

//Using the try-catch method to bypass errors

function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.base);
    console.log('This will probably not show' );
}

beforeTryCatch();

function afterTryCatch() {
    try {
        
    let obj = undefined;
    console.log(obj.base);
    console.log('This will probably not show' );

    } catch (error) {
        console.log('The kind of error that occured is a ' + error);        
    }
    finally{
        console.log('Please try a valid response.');
    }
}

afterTryCatch();

//==================================================
function perfCalc(obj) {
    
}

function higherLevel() {
    
    
}