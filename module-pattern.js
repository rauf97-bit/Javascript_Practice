// ======= Using modules to improve scope knowledge ======


//===== Firstly using an IIFE to make a simple counter =================
let counter = (function () {
    let count = 0;

    function print(mssg) {
        console.log(mssg + '---' + count);
    }

    return {
        get : function () {   return count;},
        set : function (value) { return count = value;},

        increment : function() {
        count += 1;
        print('The current value is ');
        },

        reset : function() {
        print('The value b4 reset is ');
        count = 0;
        print('The value after reset is ');
        }
    }
})();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

console.log(counter.reset());
console.log(counter.value);
counter.set(4);
console.log(counter.get());


//==================== Another 1 =============
// Using a Var Object to make another counter ============


var obj = {
      counter : 0,
      get reset() {
        this.counter = 0;
      },
      get increment() {
        this.counter++;
      },
      get decrement() {
        this.counter--;
      },
      set add(value) {
        this.counter += value;
      },
      set subtract(value) {
        this.counter -= value;
      }
    };
    // Play with the counter:
    obj.reset;
    obj.add = 145;
    obj.subtract = 5;
    obj.increment;
    obj.decrement;

    console.log(obj.counter);