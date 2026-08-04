//Syntax
// const newArray = originalArray.filter((item, index, array) => {
//   // return true → keep this item
//   // return false → throw it away
// });



// const numbers = [32, 34, 53, 64, 75];

// const result= numbers.filter(num => num > 40) // it also return new array
// console.log(result)
// console.log(numbers.filter(num => num > 40))

// console.log(numbers)

// const users = [
//   { name: "Rakib", age: 22 },
//   { name: "Aisha", age: 17 },
//   { name: "Karim", age: 30 }
// ];

// const adults = users.filter(user => user.age >= 18);

// console.log(adults);
// [{ name: "Rakib", age: 22 }, { name: "Karim", age: 30 }]

//You can filter on any condition — a property, a string match, multiple conditions with && or ||, etc.

// const activeAdults = users.filter(user => user.age >= 18 && user.name.startsWith("R"));
// console.log(activeAdults)

//🔗====== Chaining filter() with map()========

const users = [
  { name: "Rakib", age: 23 },
  { name: "Payel", age: 22 },
  { name: "Rupam", age: 22 },
  { name: "Ramij", age: 23 },
  { name: "Pandit", age: 23 }
];

const keepName = users.filter(user => user.name.startsWith("R")).map(nam => nam.name)

console.log(keepName)
