// Spread the Word

//Spread syntax (...)
/*
Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6 

A more powerful array literal
Without spread syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient and imperative code must be used instead using a combination of push(), splice(), concat(), etc. With spread syntax this becomes much more succinct:

const parts = ['shoulders', 'knees']; 
const lyrics = ['head', ...parts, 'and', 'toes']; 
//  ["head", "shoulders", "knees", "and", "toes"]*/

// 1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
let euroCountries =  ['Germany', 'Hungary', 'Belgium', 'France', 'Portugal', 'Spain'];
let asianCountries = ['Taiwan', 'Myanmar', 'Thailand', 'China', 'Japan', 'South Korea'];
euroCountries.push(...asianCountries);
//OR
//euroCountries = [euroCountries,...asianCountries];
console.log(euroCountries); 
/*
[ 'Germany',
  'Hungary',
  'Belgium',
  'France',
  'Portugal',
  'Spain',
  'Taiwan',
  'Myanmar',
  'Thailand',
  'China',
  'Japan',
  'South Korea' ] */

// Once again create two arrays. Save all elements of both arrays to another variable.
let euroCountries2 = ['Germany', 'Hungary', 'Belgium', 'France', 'Portugal', 'Spain'];
let asianCountries2 = ['Taiwan', 'Myanmar', 'Thailand', 'China', 'Japan', 'South Korea'];
//const worldCountries = euroCountries.concat(asianCountries);
//OR
let worldCountries = [...euroCountries2, ...asianCountries2]
console.log(worldCountries);
/*
[ 'Germany',
  'Hungary',
  'Belgium',
  'France',
  'Portugal',
  'Spain',
  'Taiwan',
  'Myanmar',
  'Thailand',
  'China',
  'Japan',
  'South Korea' ] */

// 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.
let myArray = [1, 2, 3, 4];
let copiedArray = [...myArray];
console.log(copiedArray); //[ 1, 2, 3, 4 ]

// 3. Find the Largest...
// Create a function to find the largest number in an array.
let findMax = (array) => {
return Math.max(...array)
}
console.log(findMax([1, -2, 3, 4, 5, 8, 10])); //10
//OR
function findMax2(array) {
    return Math.max(...array)
} console.log(findMax2([1, -2, 3, 4, 5, 8, 10])); //10


// 4. Find the Smallest
// Create a function to find the smallest number in an array.
let findMin = (array) => {
    return Math.min(...array)
    }
    console.log(findMin([1, -2, 3, 4, 5, 8, 10])); //-2

// 5. Clone and Merge
// https://www.javascripttutorial.net/object/javascript-merge-objects/ // Object.assign

// Given two objects:
// 5.1 Clone the person object.
// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
// 5.3 Then change the values of the properties in the employee object.
const person = {name: "John"};
const job = {role: "Teacher"};
let person2 = {...person};
//OR
let person3 = Object.assign(person);
console.log(person2, person3); //{ name: 'John' } { name: 'John' }

const employee = {
    ...person,
    ...job
};
console.log(employee); //{ name: 'John', role: 'Teacher' }
employee.name = 'Christian';
employee.role = 'Architect'
console.log(employee); //{ name: 'Christian', role: 'Architect' }

// Bonus: 6. Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.

// Examples

// isWhole(1, 2, 3, 4) ➞ false

// isWhole(9, 2, 2, 5) ➞ false

//Number.isInteger() method determines whether the passed value is an integer.
//to calculate the average : numbers.reduce((acc, val) => acc + val, 0) / numbers.length

const isWhole = (...numbers) => {
    if(Number.isInteger(numbers.reduce((a, b) => a + b, 0) / numbers.length)) {
        return true;
    }
    else {
        return false;
    }
}
      console.log(isWhole(9, 2, 2, 5)); //false
      console.log(isWhole(1, 2, 6, 4)); //false
      console.log(isWhole(2, 4, 6, 8)); //true

//OR

let numbers = [2, 4, 6, 8];
function isWhole2(...num) { 
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
    sum += num[i];
    }
    if (Number.isInteger(sum/num.length)) {
        return true;
    }
    else {
        return false
    }
    }
    console.log(isWhole2(...numbers)); //true 
    
 


// Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!