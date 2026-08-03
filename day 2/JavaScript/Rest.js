// function sum (...numbers){
//     return numbers.reduce((a,b)=> a+b, 0) // if nothing  is give as parameter then 0 will be return here.
// }

// console.log(sum(1,2,3))
// console.log(sum(21,3,5,2,5,6,2))

// console.log(sum())


// function greet(greeting, ...names){
//     return names.map(name => `${greeting}, ${name}`)
// }
// const result = greet("Hi", "Rakib", "Payel", "Pandit", "Rupam", "Ramij")
// console.log(result)


// function greet(...names, greeting){
//     return names.map(name => `${greeting}, ${name}`)
// } //❌ This is not worked

// const result = greet("Rakib", "Payel", "Pandit", "Rupam", "Ramij", "Hi")
// console.log(result)



//=====Collect Remaining Array Elements===
// const [first, second, ...rest] = [10, 20, 30, 40, 50];

// console.log(first);  // 10
// console.log(second); // 20
// console.log(rest);   // [30, 40, 50]

//===Collect Remaining Object Properties====
// const user = { name: "Rakib", age: 24, city: "Kolkata", country: "India" };

// const { name, ...otherDetails } = user;

// console.log(name);         // Rakib
// console.log(otherDetails); // { age: 24, city: "Kolkata", country: "India" }



//===== A common real use case — stripping one field before sending data somewhere:

// const formData = { name: "Rakib", age: 24, password: "secret123" };
// const { password, ...safeData } = formData;

// console.log(safeData); // { name: "Rakib", age: 24 }  → password removed



//spreads assign right side, rest assing left side

// REST — collecting into "rest"
// function example(first, ...rest) {
//   console.log(rest); // an array
// }
// example(1, 2, 3, 4); // rest = [2, 3, 4]

// // SPREAD — expanding "arr" out
// const arr = [2, 3, 4];
// const newArr = [1, ...arr];
// console.log(newArr); // [1, 2, 3, 4]



function combine(...args) {      // rest — receiving
//   console.log(...args)
    return [...args, "done"];      // spread — providing
  
}

console.log(combine(1, 2, 3)); // [1, 2, 3, "done"]

