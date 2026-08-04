//syntax
// const result = array.some((item, index, array) => {
//   // return true → condition met, stop and return true
//   // return false → keep checking
// });

// const marks = [35, 42, 78];

// const hasPassed = marks.some(mark => mark >=40)

// console.log(hasPassed)

// const marks = [10, 20, 30];

// const hasPassed = marks.some(mark => mark >= 40);

// console.log(hasPassed); // false



// find vs some 
const numbers = [5, 10, 15, 20];

console.log(numbers.some(n => n > 10));  // true  → just a yes/no
console.log(numbers.find(n => n > 10));  // 15    → the actual value