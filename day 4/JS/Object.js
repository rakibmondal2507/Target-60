// const user = {
//   name: "Rakib",
//   age: 24,
//   city: "Kolkata"
// };

// console.log(user)

//===Creating Object ====
// Object literal (most common)
// const user = { name: "Rakib", age: 24 };

// // Using the Object constructor (rarely used in practice)
// const user2 = new Object();
// user2.name = "Rakib";
// user2.name =  "Payel"

// console.log(user)
// console.log(user2)



//=== Object Method===
// const user = {
//   name: "Rakib",
//   greet() {
//     console.log(`Hi, I'm ${this.name}`);
//   }
// };

// user.name = "Pandit"
// user.greet(); 
// user.name = "Payel"
// user.greet(); 

//==== Nested Object
// const user = {
//   name: "Rakib",
//   address: {
//     city: "Kolkata",
//     pincode: "700001"
//   }
// };

// console.log(user.address.city); // "Kolkata"
// console.log(user.address)


//====Array inside object
// const user = {
//   name: "Rakib",
//   hobbies: ["coding", "reading", "cricket"]
// };

// // console.log(user.hobbies[0]); // "coding"
// console.log(user.hobbies[2])


//Object inside array


// const users = [
//   { name: "Rakib", age: 24, city: "Kolkata" },
//   { name: "Payel", age: 22, city: "West Bengal" }
// ];

// console.log(users[1].name);
// console.log(users[0].age);

//Bracket notaion 

// const user = {
//   name: "Rakib",
//   city: "Basirhat",
//   skills: ["HTML", "CSS", "JavaScript", "Python"]
// }


// console.log(user["city"]);

// const key = "name";
// console.log(user[key]); // dynamic access — dot notation can't do this

// //adding new key
// user.email = "rakib@example.com";
// user["country"] = "India";

// console.log(user.country)
// console.log(user["country"])

//deleting properties
// delete user.city;
// console.log(user); // city is gone

// const user = {
//   name: "Rakib",
//   age: 24,
//   city: "Kolkata"
// };

// console.log(user.name);     // "Rakib"
// console.log(user["city"]);  // "Kolkata"
