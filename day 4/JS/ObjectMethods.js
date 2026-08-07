const student = {
  name: "Rakib",
  marks: 90
};
//== Object keys
// console.log(Object.keys(student))
// Object.keys(student).forEach(key =>{
//     console.log(key)
// })

//=== Object value
// console.log(Object.values(student))
// ["Rakib", 90]

//=== Object Entries
// console.log(Object.entries(student))
// [["name", "Rakib"], ["marks", 90]]

// Object.entries(student).forEach((item)=> {
//     const [key, value] = item;
//     console.log(`${key}:${value}`)
// })

//===Object assign ===
// const defaults = { theme: "light", fontSize: 14 };
// const userPrefs = { fontSize: 18 };
// // const finalSetting = Object.assign({}, defaults, userPrefs)
// // const finalSetting = Object.assign([], defaults, userPrefs) //❌it's works but not valid syntax
// console.log(finalSetting)


//==== Object freeze ===

// const config = { apiUrl: "https://api.example.com" };
// console.log(Object.freeze(config))//fails silently (or throws in strict mode)

// config.apiUrl = "https://hacked.com"
// console.log(config.apiUrl)

// === . Object.seal()===
//What it does: Prevents adding or deleting properties, but existing properties can still be updated.
// const student2 = { name: "Rakib" };
// Object.seal(student2);
// student2.name = "Payel" // ✅ allowed — updating existing property
// student2.age = "22"  // ❌ blocked — can't add new property
// delete student2.name;  // ❌ blocked — can't delete
// console.log(student2)

//Note - seal() locks the shape of the object but lets the values inside still change. freeze() locks everything.

//==== Object.hasOwn() ====== 
// What it does: Checks if a property exists directly on the object (not inherited).
console.log(Object.hasOwn(student, "name")); // true
console.log(Object.hasOwn(student, "age")); // false


// summary: 
// keys() / values() / entries() → different views of the same data
// assign() → merge objects
// freeze() → total lock
// seal() → lock shape, allow value edits
// hasOwn() → check if a property exists