// 1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
// Once again create two arrays. Save all elements of both arrays to another variable.

let euroCountries = ["Italy", "Germany", "Portugal", "Greece"];
let asianCountries = ["Vietnam", "Japan", "Mongolia", "China"];
let euroAsianCountries = [...euroCountries, ...asianCountries];
console.log(euroAsianCountries);  // [ 'Italy',    'Germany',  'Portugal', 'Greece', 'Vietnam',  'Japan',  'Mongolia', 'China']

let seafood = ["squid", "shrimp", "mussels"];
let base = ["pasta", "cherryTomato", "garlic"];
let pastaSeaFood = [...seafood, ...base];
console.log(pastaSeaFood); // [ 'squid', 'shrimp', 'mussels', 'pasta', 'cherryTomato', 'garlic' ]



// 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.

let myTools = ["laptop", "mouse", "screen", "google"];

let anyoneTools = [...myTools];
console.log(anyoneTools);  // [ 'laptop', 'mouse', 'screen', 'google' ]



// 3. Find the Largest...
// Create a function to find the largest number in an array.

let myArr = [28, 4, 67, 121, 33];

let largestNum = () => Math.max(...myArr);

console.log(largestNum()); // 121


// 4. Find the Smallest
// Create a function to find the smallest number in an array.

let myArr1 = [7, 28, 67, -4, 131];

let smallestNum = () => Math.min(...myArr1);
console.log(smallestNum());  // - 4


// 5. Clone and Merge
// Given two objects:

// const person = {name: "John"}
// const job = {role: "Teacher"}

const person = {name: "John"};
const job = {role: "Teacher"};

// 5.1 Clone the person object.
let clonedPerson = {...person};
console.log(clonedPerson);   // { name: 'John' }

// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
const employee = {...person, ... job};
console.log(employee);   // { name: 'John', role: 'Teacher' }

// 5.3 Then change the values of the properties in the employee object.
employee.name='Carl';
employee.role='driver'
console.log(employee);   // { name: 'Carl', role: 'driver' }


// Bonus: 6. Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.

// Examples

// isWhole(1, 2, 3, 4) ➞ false

// isWhole(9, 2, 2, 5) ➞ false

// Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

let myArr2 = [9, 6, 5, 4];

function isWhole(a, b, c, d) {
    if ((a +  b + c + d) % 4 === 0)  {
        return true
} else {
         return false;
}

}

console.log(isWhole(1, 2, 3, 4)); // false
console.log(isWhole(9, 2, 2, 5)); // false
console.log(isWhole(9, 2, 2, 3)); // true
console.log(isWhole(...myArr2)); // true

