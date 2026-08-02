// const user = {
//   name: "Aman",
//   greet: function () {
//     console.log(this.name);
//   }
// };

// user.greet(); // Aman

// const user = {
//   name: "Aman",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// user.greet(); // undefined

const user = {
  name: "Aman",
  greet: function () {
    const sayHi = () => {
      console.log(this.name);
    };
    sayHi();
  }
};

user.greet(); // Aman