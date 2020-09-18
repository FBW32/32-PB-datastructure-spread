// #### 1. Combining Arrays 
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
// * Once again create two arrays. Save all elements of both arrays to another variable. 
console.log('----------First Question----------');

let euroCities = ["Berlin", "london","Paris","madrid","lisbon"];
let asianCities = ["tokyo","delhi","damascus","jakarta","seoul"];

let euroAsianCities = [...euroCities,...asianCities];
console.log(euroAsianCities.join(' , '));


function worldCities(arr1,arr2) {
    let all = [...arr1 ,...arr2];
    return all.join(" , ");
}
console.log(worldCities(euroCities,asianCities));

//#### 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable. 
console.log('----------Second Question----------');

const currencies = ['euro','dollar','pound','frank'];
const newCurrencies = [...currencies];
console.log(newCurrencies);


//#### 3. Find the Largest...
console.log('----------Third Question----------');
// Create a function to find the largest number in an array.
const numbers= [34,56,99,2,5,897,235,1250];
function largestNumFunction(...arr){
    return Math.max(...arr);
};
// largestNumFunction = ((...arr)=> Math.max(...arr));
console.log(largestNumFunction(...numbers));//1250


//#### 4.  Find the Smallest
console.log('----------Fourth Question----------');

function smallestNumFunction(...arr){
    return Math.min(...arr);
};
console.log(smallestNumFunction(...numbers)); //2



//#### 5.  Clone and Merge
console.log('----------Fifth Question----------');
// Given two objects:
// ```javascript
// const person = {name: "John"}
// const job = {role: "Teacher"}
// ```
// * 5.1 Clone the person object.
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
// * 5.3 Then change the values of the properties in the employee object.

const person = {name: "John"}
const job = {role: "Teacher"}

let employee= {...person,...job};

console.log(employee);

employee.name= "Doe";

console.log('changing value of key "name"',employee);


//#### 6.  Is the average a whole number?
console.log('----------Sixth Question----------');

// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false

// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

function isWhole(x,y,z,w,...r){
    if((x+y+z+w)%4 == 0){
        return true;
    } else {
        return false;
    }
}

console.log(isWhole(9,2,3,10)); // true
console.log(isWhole(1,2,3,4)); // false
console.log(isWhole(9,2,2,5)); // false

let testArr =[4,6,3,4,7];
let testArr1 =[1,10,10,19];
console.log(isWhole(...testArr)); //false
console.log(isWhole(...testArr1));