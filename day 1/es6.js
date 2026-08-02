/* function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 — accessible outside the if block!
}

test()
*/


function test() {
  if (true) {
    let x = 10;
    const y = 20;
  }
  console.log(x); // ReferenceError: x is not defined
}
test()

// Hoisting

// console.log(y); // undefined (not an error)
// var y = 5;
// node js top prgram act like bottom program thats why it's not giving error

// var y;
// console.log(y); // undefined
// y = 5;