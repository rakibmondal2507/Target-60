//Copy arrays

// const original = [1, 2, 3];
// const copy = original ❌ it pointed same refrence not copying

// copy[0]=5;
// console.log(original)

// const original = [1, 2, 3];
// const copy = [...original]; // this is called shallow copy

// copy [1]= 5;

// console.log(original)
// console.log(copy)


//==== Marge arrays =====
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const merged = [...arr1, ...arr2];
// console.log(merged); // [1, 2, 3, 4]


//=== add New Element ====

// const nums = [2,3,4]
// const addnew = [1,...nums,5,6]
// console.log(addnew)


//==== Convert a string into an array — spread breaks a string into its individual characters ====

// const str = "Rakib"
// const chars = [...str]
// console.log(chars)


///// spread works on anything iterable (arrays, strings, Sets, Maps)./////


//Spread with Object
// const user = { name: "Rakib" };
// const copy = {...user}
// console.log(user)
// copy.name = "Payel"
// console.log(copy)

// const user = { name: "Rakib", age: 23, address:{city:"Kolkata", dist:"N 24 Pgs"} };

// const copy = {...user}
// copy.address.dist = "Nadia";

// console.log(user.address.dist) 
// console.log(copy.address.dist) 
// 1. Top-level properties (name, age) are copied by value. Modifying copy.name will not affect user.name.
// 2.Nested objects (address) are copied by reference (memory location).

// copy.name = "Payel"
// console.log(user.name)
// console.log(copy.name)

//for that there is DEEP Copy

// const copy2 = structuredClone(user)

// copy2.address.dist = "Nadia"
// console.log(user.address.dist)
// console.log(copy2.address.dist)


//=== Merge Object ====

// const personal = { name: "Rakib", city: "Kolkata" };
// const academic = { degree: "CSE", year: 3 };

// const profile = {...personal, ...academic}
// console.log(profile)

//if key is same the it will override
// const user = {name:"Rakib", age: 23}
// const user2 = {name: "Payel", age: 22}

// const mergeUser = {...user, ...user2}
// const mergeUser = {...user2, ...user} //here ordr matters it's give oppostite result

// console.log(mergeUser)

//=== Immutable updates === usally used in react most
// const user = { name: "Rakib" };
// const updated = { ...user, age: 24 };

// console.log(user);    // { name: "Rakib" }               → original untouched
// console.log(updated); // { name: "Rakib", age: 24 }



// ===== important =====>  spread only copies one level deep. For nested updates you need to spread at each level

// const user = { name: "Rakib", address: { city: "Kolkata", pin: "700001" } };

// Wrong — this replaces the whole address object
// const wrong = { ...user, address: { pin: "700002" } };
// console.log(wrong.address.city) // this undefined

// console.log(user)
// console.log(wrong)

// Right — spread the nested object too
// const right = { ...user, address: { ...user.address, pin: "700002" } };
// console.log(right)