## 1. What is an Object?
In JavaScript, an object is a standalone entity with **properties** and **type**. Compare it with a cup, for example. A cup is an object with properties. A cup has a color, a design, weight, a material it is made of, etc.

## 2. Creating Objects
The most common way to create an object is using the **Object Literal** syntax (curly braces `{}`).

```javascript
// Creating a simple object
const student = {
  name: "Alex",
  age: 20,
  isGraduated: false
};
```

## 3. Properties and Methods
- **Properties**: Variables attached to the object (e.g., `name`, `age`).
- **Methods**: Functions attached to the object that represent actions the object can perform.

```javascript
const person = {
  firstName: "Jane",
  lastName: "Doe",
  // Method
  greet: function() {
    return `Hello, my name is ${this.firstName} ${this.lastName}`;
  }
};

console.log(person.greet()); // "Hello, my name is Jane Doe"
```

## 4. Accessing Properties
There are two ways to access an object's properties:

### A. Dot Notation
The most common and readable way.
```javascript
console.log(student.name); // "Alex"
```

### B. Bracket Notation
Useful when the property name is stored in a variable or contains special characters/spaces.
```javascript
const propertyName = "age";
console.log(student[propertyName]); // 20
console.log(student["name"]); // "Alex"
```

## 5. Adding, Updating, and Deleting Properties
Objects in JavaScript are mutable, meaning you can change them after they are created.

```javascript
const car = { brand: "Toyota" };

// Adding a property
car.model = "Camry";

// Updating a property
car.brand = "Honda";

// Deleting a property
delete car.model;

console.log(car); // { brand: "Honda" }
```

## 6. Nested Objects
Objects can contain other objects as properties. This is how we represent complex real-world data.

```javascript
const user = {
  id: 1,
  profile: {
    username: "coder123",
    email: "coder@example.com",
    address: {
      city: "New York",
      zip: "10001"
    }
  }
};

console.log(user.profile.address.city); // "New York"
```

## 7. Arrays within Objects and Objects within Arrays
This is where JavaScript gets powerful for data management.

### Arrays within Objects
```javascript
const post = {
  title: "My First Blog",
  tags: ["javascript", "webdev", "coding"], // Array as a property
  author: "Alex"
};
```

### Objects within Arrays
```javascript
const team = [
  { name: "Alice", role: "Developer" },
  { name: "Bob", role: "Designer" },
  { name: "Charlie", role: "Manager" }
];

console.log(team[1].name); // "Bob"
```

---

## 8. Comprehensive Example: The "Digital Library"
Let's combine everything into one practical example.

```javascript
// An object representing a library
const myLibrary = {
  name: "City Central Library",
  location: "Downtown",
  // Array of Objects (Objects within an Array)
  books: [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genres: ["Classic", "Fiction"] },
    { title: "1984", author: "George Orwell", genres: ["Dystopian", "Sci-Fi"] }
  ],
  // Method to add a new book
  addBook: function(title, author, genres) {
    const newBook = { title, author, genres };
    this.books.push(newBook);
    console.log(`Added: ${title}`);
  },
  // Method to list all book titles
  listBooks: function() {
    console.log(`Books in ${this.name}:`);
    this.books.forEach(book => console.log(`- ${book.title}`));
  }
};

// 1. Accessing nested data
console.log(myLibrary.books[0].genres[1]); // "Fiction"

// 2. Updating a property
myLibrary.location = "Uptown";

// 3. Adding data using a method
myLibrary.addBook("The Hobbit", "J.R.R. Tolkien", ["Fantasy"]);

// 4. Listing updated books
myLibrary.listBooks();
```

---

## Summary Table
| Concept | Syntax |
| :--- | :--- |
| **Creation** | `const obj = {};` |
| **Access (Dot)** | `obj.key` |
| **Access (Bracket)** | `obj["key"]` |
| **Update** | `obj.key = newValue;` |
| **Delete** | `delete obj.key;` |
| **Method** | `key: function() { ... }` |

---
**Next Steps:** Try creating an object that represents a `Smartphone` with properties for `brand`, `specs` (a nested object), and `apps` (an array of strings). Add a method to "install" a new app!
