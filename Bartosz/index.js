// # Spread the Word

// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
// * Once again create two arrays. Save all elements of both arrays to another variable. 

let euroCountries = ['France', 'Italy', 'Germany'];
let asianCountries = ['Japan', 'China', 'India'];

let allCountries = [...euroCountries, ...asianCountries];
console.log(allCountries); // [ 'France', 'Italy', 'Germany', 'Japan', 'China', 'India' ]

let arr1 = [2,2,2,2];
let arr2 = [4,4,4,4];
let bothArr = [...arr1, ...arr2];
console.log(bothArr); // [ 2, 2, 2, 2, 4, 4, 4, 4 ]


// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable.

let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];

let array3 = [...array1, ...array2];
console.log(array3);      //  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.

let largeArr = [4,55,12,666,27];

function largestNum(arr){
    return Math.max(...arr)
}

console.log(largestNum(largeArr)); // 666

// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.

let smallArr = [4,55,12,666,27];

function smalestNum(arr){
    return Math.min(...arr)
}

console.log(smalestNum(smallArr)); // 4

// #### 5. Clone and Merge
// Given two objects:
// const person = {name: "John"}
// const job = {role: "Teacher"}

const person = {name: "John"}
const job = {role: "Teacher"}

// * 5.1 Clone the person object.
let clonePerson = {...person}
console.log(clonePerson); // { name: 'John' }

// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
let employee = {...person, ...job}
console.log(employee); // { name: 'John', role: 'Teacher' }

// * 5.3 Then change the values of the properties in the employee object.
employee.name = 'Alex';
employee.role = 'Developer';

console.log(employee); // { name: 'Alex', role: 'Developer' }

// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false

function isWhole(a,b,c,d){

    if((a+b+c+d) % 4 == 0){
        return true
    } else {
        return false
    }
}

console.log(isWhole(1, 2, 3, 4));       // false
console.log(isWhole(9, 2, 2, 5));       // false
console.log(isWhole(9, 2, 2, 7));       // true
console.log(isWhole(10, 20, 5, 5));     // true
