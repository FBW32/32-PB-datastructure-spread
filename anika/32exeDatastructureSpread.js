// ************EXERCISE 32 DATASTRUCTURE SPREAD*****************

// # Spread the Word

// #### 1. Combining Arrays
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
// * Once again create two arrays. Save all elements of both arrays to another variable.

let euroCountries = ["manchester", "lisboa", "prague", "paris"];
let asianCountries = ["bejing", "chiang mai", "delhi", "hong kong"];

euroCountries = [...euroCountries, ...asianCountries];
console.log(euroCountries);
// [
//     'manchester',
//     'lisboa',
//     'prague',
//     'paris',
//     'bejing',
//     'chiang mai',
//     'delhi',
//     'hong kong'
//   ]

let euroCountries2 = ["manchester", "lisboa", "prague", "paris"];
let asianCountries2 = ["bejing", "chiang mai", "delhi", "hong kong"];

let mergedArray = [...euroCountries2, ...asianCountries2];
console.log(mergedArray);
// [
//     'manchester',
//     'lisboa',
//     'prague',
//     'paris',
//     'bejing',
//     'chiang mai',
//     'delhi',
//     'hong kong'
//   ]

// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable.

let euroCountries3 = ["manchester", "lisboa", "prague", "paris"];

let arrQ2 = [...euroCountries3];

console.log(euroCountries3); // [ 'manchester', 'lisboa', 'prague', 'paris' ]
console.log(arrQ2); // [ 'manchester', 'lisboa', 'prague', 'paris' ]

// #### 3. Find the Largest...
// Create a function to find the largest number in an array.

function q3(arr) {
  return Math.max(...arr);
}

console.log(q3([2, 2, 5, 8])); // 8

console.log(q3([6, 8, 4, 2, 6, 53])); // 53

// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.

function q4(arr) {
  return Math.min(...arr);
}

console.log(q4([2, 2, 5, 8])); // 2

console.log(q4([6, 8, 4, 2, 6, 53])); // 2

// #### 5. Clone and Merge
// Given two objects:
// ```javascript
// const person = {name: "John"}
// const job = {role: "Teacher"}
// ```
// * 5.1 Clone the person object.
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
// * 5.3 Then change the values of the properties in the employee object.

// 5.1
const job = { role: "Teacher" };

const person = { name: "John" };

let q5Clone = { ...person };

console.log(person); // { name: 'John' }
console.log(q5Clone); // { name: 'John' }

// 5.2
let employee = { ...person, ...job };
console.log(employee); // { name: 'John', role: 'Teacher' }

// 5.3
employee.name = "trish";
employee.role = "student";

console.log(employee); // { name: 'trish', role: 'student' }
