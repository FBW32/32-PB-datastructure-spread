/* 1. Combining Arrays
Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
Once again create two arrays. Save all elements of both arrays to another variable. */

let euroCountries = ["Poland", "Germany", "France"];
let asianCountries = ["Japan", "Indonesia", "China"];
let arr = euroCountries.concat(asianCountries);
console.log(arr);  // [ 'Poland', 'Germany', 'France', 'Japan', 'Indonesia', 'China' ]

/* 2. 
Copying Arrays
Copy an array using the spread operator. Store the copied array in another variable. */

let copyArr = [...euroCountries, ...asianCountries];
console.log(copyArr);  // [ 'Poland', 'Germany', 'France', 'Japan', 'Indonesia', 'China' ]

/* 3. 
Find the Largest...
Create a function to find the largest number in an array. */

let num1= [1, 5, 3, 8];
let num2 = [78, 89, 32]
function theLargest(...AnArr) {
    return Math.max.apply(null,AnArr);
}
console.log(theLargest(...num1)); // 8
console.log(theLargest(...num2)); // 89


/* 4. 
Find the Smallest
Create a function to find the smallest number in an array. */



let num3= [1, 5, 3, 8];
let num4 = [78, 89, 32]
function theLargest(...AnArr) {
    return Math.min.apply(null,AnArr);
}
console.log(theLargest(...num3)); // 1
console.log(theLargest(...num4)); // 32

/* 5. 
Clone and Merge
Given two objects:

5.1 Clone the person object. */


const person = {name: "John"};
const job = {role: "Teacher"};
let cloneObj = {...person};
console.log(cloneObj);  // { name: 'John' }



/* 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. */

let employee = Object.assign(person, job);
console.log(employee);  // { name: 'John', role: 'Teacher' }


/* 5.3 Then change the values of the properties in the employee object.  */

employee.name = 'Peter';
console.log(employee);  // { name: 'Peter', role: 'Teacher' }


/* Bonus: 
6. 
Is the average a whole number?
Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.

Examples

isWhole(1, 2, 3, 4) ➞ false

isWhole(9, 2, 2, 5) ➞ false

Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result! */

let isWhole1 = [1, 2, 3, 6]; //➞ false
// let isWhole2 = (9, 2, 2, 5); //➞ false

function isWhole(...numb1) { 
        let LoopNumbers = 0;
    for (let i = 0; i < numb1.length; i++) {
        LoopNumbers += numb1[i];
        console.log(LoopNumbers);
    }
    if (Number.isInteger(LoopNumbers / numb1.length)) {
    return true; }
   else {
     return false;
  }
}

console.log(isWhole(...isWhole1));
//console.log(number_test(isWhole2));