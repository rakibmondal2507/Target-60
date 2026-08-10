const user = { profile: { address: { city: "Kolkata" } } };

// console.log(user.profile.phone.number);
// ❌ TypeError: Cannot read properties of undefined (reading 'number')

// console.log(user.profile?.address?.city)
// console.log(user.profile?.address?.town)

function getCity(user) {
  return user?.profile?.address?.city ?? "City not set";
}

// console.log(getCity(user))
// console.log(getCity({}))
// console.log(getCity(undefined))
//That ?? is the nullish coalescing operator — gives a fallback value only when the left side is null/undefined. Good pair with ?.

const user2 = { hobbies: ["coding", "cricket"] };
const user3 = {};

// console.log(user2?.hobbies?.[0])
// console.log(user3?.hobbies?.[0])

// With Function Calls (?.())
// const user4 = {
//     name: "Rakib",
//     greet(){
//         console.log("hi")
//     }
// }
// user4.greet?.()
// user4.sayBye?.()
