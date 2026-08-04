//SYNTAX

// const newArray = originalArray.map((item, index, array) => {
//   // return something for each item
// });


// const array = [1,2,3,4,5,6]

// const newArray = array.map(item => item * 2) // return new array

// console.log(newArray)
// console.log(array)

// const numbers = [1, 2, 3, 4];
// const square = numbers.map(num => num * num);

// console.log(square); 


//realworld example

const users = [
  { name: "Rakib", age: 23 },
  { name: "Payel", age: 22 }
];

const names = users.map(user => user.name);
console.log(users.map(user => user.name))

console.log(names); // ["Rakib", "Payel"]