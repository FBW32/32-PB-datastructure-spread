// Spread the Word

/* 1. Combining Arrays
    Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
    Once again create two arrays. Save all elements of both arrays to another variable.
*/
let euroCountries = ["Germany", "Austria", "Denmark", "Italy"];
let asianCountries = ["India", "Singapore", "Japan"];
euroCountries.push(...asianCountries);
console.log(euroCountries); // [ 'Germany', 'Austria', 'Denmark', 'Italy', 'India', 'Singapore', 'Japan' ]
  
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let combinedArray = [...array1, ...array2];
console.log(combinedArray); // [  1, 2, 3, 4,  5,  6, 7, 8, 9, 10 ]
  
/* 2. Copying Arrays
    Copy an array using the spread operator. Store the copied array in another variable.
*/
let fruits = ["Banana", "Apple", "Mango", "Strawberry", "Orange"];
let newFruits = [...fruits];
console.log(newFruits); // [ 'Banana', 'Apple', 'Mango', 'Strawberry', 'Orange' ]

/* 3. Find the Largest...
    Create a function to find the largest number in an array.
*/
let largestNumber = [25, 13, 76, 94, 34];
console.log(Math.max(...largestNumber)); // 94

/* 4. Find the Smallest
    Create a function to find the smallest number in an array.
*/
let smallestNumber = [66, 18, 54, 87, 63];
console.log(Math.min(...smallestNumber)); // 18

/* 5. Clone and Merge
    Given two objects:

    const person = {name: "John"}
    const job = {role: "Teacher"}
*/
const person = {name: "John"};
const job = {role: "Teacher"};

// 5.1 Clone the person object.
const clonedPerson = {...person};
console.log(clonedPerson); // { name: 'John' }

// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
const employee = {...person, ...job};
console.log(employee); // { name: 'John', role: 'Teacher' }

// 5.3 Then change the values of the properties in the employee object.
const changedEmployee = {...employee, name: 'David', role: 'Doctor'};
console.log(changedEmployee); // { name: 'David', role: 'Doctor' }

/* Bonus: 6. Is the average a whole number?
    Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
    Examples
    isWhole(1, 2, 3, 4) ➞ false
    isWhole(9, 2, 2, 5) ➞ false
    Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!
*/
function isWhole(num1, num2, num3, num4) {
    let total = num1 + num2 + num3 + num4;
    let average = total / 4;
    // console.log(average);
    if (Number.isInteger(average)) {
        return true;
    } else {
        return false;
    }
}
console.log(isWhole(1, 2, 3, 4)); // false
console.log(isWhole(2, 3, 4, 7)); // true