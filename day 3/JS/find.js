//syntax

// const result = array.find((item, index, array) => {
//   // return true → this is the one, stop here
//   // return false → keep looking
// });

// const users = [
//   { id: 1, name: "Rakib" },
//   { id: 2, name: "Rahul" }
// ];

// const user = users.find(usr => usr.id ===2)

// console.log(user)


// find and filter difference 
// const numbers = [5, 10, 15, 20];

// const found = numbers.find(n => n > 10);
// console.log(found); // 15  → just ONE value

// const filtered = numbers.filter(n => n > 10);
// console.log(filtered); // [15, 20]  → an ARRAY of values


//find() is especially handy when working with arrays of objects — like looking up a record by ID, which is super common in real apps:

const products = [
  { id: 101, name: "Laptop", price: 50000 },
  { id: 102, name: "Phone", price: 20000 },
  { id: 103, name: "Tablet", price: 15000 }
];

const product = products.find(p => p.id === 102);
console.log(product); // { id: 102, name: "Phone", price: 20000 }