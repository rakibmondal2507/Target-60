// const colors = ["Red", "Green", "Blue"];
// const [first, second] = colors;
// console.log(first);  // Red
// console.log(second); // Green


//skipping element
// const colors = ["Red", "Green", "Blue"];

// const [,green] = colors;
// console.log(green)
// const [,,d]= colors;
// console.log(d)

//default value
// const [a, b, c = "Yellow"] = ["Red", "Green"];
// console.log(c); // Yellow
// console.log(a)


//swapping varriable
// let x= 1;
// let y= 2;

// [x, y] = [y, x]
// console.log(x, y)


//rest element
// const [first, ...rest] = ["Red", "Green", "Blue", "Yellow"];
// console.log(first)
// console.log(rest)

//nested array destructing
// const nested = ["Red", ["Green", "Blue"]];
// const [a,[g,b]] = nested

// console.log(g)
// console.log(a)

//object Destructing
// const user = { name: "Rakib", age: 24, city: "Kolkata" };

// // const {name, age , city}= user;
// const {n, a , c}= user;// ❌not working, object should give exat name 
// console.log(city)


//renaming varriable
// const user = { name: "Rakib", age: 24 };

// const {name: userName, age:userAge} = user
// console.log(userAge)
// console.log(name)❌


//default values
// const user = { name: "Rakib" };
// const { name, city = "Unknown" } = user;
// console.log(city); // Unknown

// const { city: userCity = "Unknown" } = user;
// console.log(userCity)

//nested opject
// const user = {
//   name: "Rakib",
//   address: {
//     city: "Kolkata",
//     pin: "700001",
//     contact: {
//         email: "rakib@email.com",
//         phone:" 98000001"
//     }
//   }
// };

// const { address: { city, pin } } = user;
// console.log(city); // Kolkata

// const {address: {contact: {email, phone}}} =user;
// const {address: {contact: {phone, email}}} =user;
// console.log(email)
// console.log(address) ❌ address is not created here

// const {address, address: {contact: {phone, email}}} =user;
// console.log(address)

//in function
// function greetUser({ name, city = "Unknown" }) {
//   console.log(`Hi ${name} from ${city}`);
// }

// greetUser({ name: "Rakib", city: "Kolkata" }); // Hi Rakib from Kolkata


//array parameters
// function sum([a, b, c=0, d= 0]) {
//   return a + b +c +d;
// }
// const result = sum([3, 4, 3, 5, 6]); // 7
// console.log(result)



// function greetUser({ name, address: { city } = {} }) {
//   console.log(city);
// }
// greetUser({ name: "Rakib"}); // works, city is undefined — because of the `= {}` fallback
// greetUser({ name: "Rakib", address:{city: "kolkata"}});

//Without that = {} default, this would throw a "Cannot destructure property 'city' of undefined" error — a very common bug in React components that destructure props.something.somethingElse