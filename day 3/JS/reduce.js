//Syntax

// const result = array.reduce((accumulator, currentValue, index, array) => {
//   // return the updated accumulator
// }, initialValue);


// const numbers = [2,3,5,6,7,9]

// const sum = numbers.reduce((acc, curr)=> acc + curr, 0) // 0 is initial value

// console.log(sum)

                    // acc = previous result  ,  curr = current value
// const nums = [1, 2, 3, 4];
// const product = nums.reduce((acc, curr) => acc * curr, 1);
// console.log(product); // 24

// Maximum value 
// const nums = [32, 5, 53, 31, 59, 6, 7]
// const max = nums.reduce((acc, curr)=>(curr>acc ? curr : acc), nums[0])

// console.log(max)

//=== Grouping Data
// const users = [
//   { name: "Rakib", city: "Kolkata" },
//   { name: "Aisha", city: "Delhi" },
//   { name: "Karim", city: "Kolkata" }
// ];

// const groupByCity = users.reduce((acc, user)=>{
//     if(!acc[user.city]){
//         acc[user.city] = []
//     }
//     acc[user.city].push(user.name);
//     return acc;
// },{});
// console.log(groupByCity)


const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitsCount = fruits.reduce((acc,fruit)=>{
    if(acc[fruit]== null){
        acc[fruit] = 0;
    }
    acc[fruit] += 1
    return acc;
},{})

console.log(fruitsCount)