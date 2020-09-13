// #### 1. Combining Arrays 
//* Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
//* Once again create two arrays. Save all elements of both arrays to another variable. 

let euroStates = ["madrid","Paris","London","Frankfurt"];

let asianStates =["HongKong","Jakarta","Delhi","Tokyo"];

let euroAsianStates = euroStates.concat(asianStates);
console.log(euroAsianStates); 

//[
//  'madrid',   'Paris',
//  'London',   'Frankfurt',
//  'HongKong', 'Jakarta',
//  'Delhi',    'Tokyo'
//]

numArr = [2,4,6,8];
birdsArr = ["parrot","swan","eagle","ostrich"];

let mixArr = [...numArr,...birdsArr];
console.log(mixArr);  
// [ 2, 4, 6, 8, 'parrot', 'swan', 'eagle', 'ostrich' ]

// #### 2. Copying Arrays
//* Copy an array using the spread operator. Store the copied array in another variable. 
//var wildAn =["lion","tiger","wolf","leopard"];

let domAn = ["dog","cat","goat","rabbit"];

let copiedDom = [...domAn];
console.log(copiedDom);  // [ 'dog', 'cat', 'goat', 'rabbit' ]

// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.

function largestNum(numArr2) {
    let bigNum =Math.max(...numArr2);
    console.log(bigNum); 
}

largestNum([8,5,3,12,26]);  // 26

//#### 4. Find the Smallest
//Create a function to find the smallest number in an array.

function smallNumber(numArr3) {
    let smallNum = Math.min(...numArr3);
    
    console.log(smallNum);
}

smallNumber([8,5,3,12,26])  //  3

// #### 5. Clone and Merge
//Given two objects:

// * 5.1 Clone the person object.
//"employee". Use the spread operator to do so. 
//* 5.3 Then change the values of the properties in the employee object.

const person = {name: "John"};
const job = {role: "Teacher"};

let newPerson = {...person};
console.log(newPerson); // { name: 'John' }

//* 5.2 Merge these two objects into one object: 

let employee = {...person,...job};
console.log(employee);  // { name: 'John', role: 'Teacher' }

employee.name = 'Frank';
employee.role = 'Product Manager';

console.log(employee); // { name: 'Frank', role: 'Product Manager' }

// #### Bonus: 6.  Is the average a whole number?
//Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.

function wholeNumberAverage(int,int1,int2,int3) {
    
    let numAve = (int +int1 +int2 +int3)/4;
    //console.log(numAve); 
    let wholeNum = (Number.isInteger(numAve)) ? true : false;
    console.log(wholeNum);
}

wholeNumberAverage(16,32,8,4) // true
wholeNumberAverage([24,30,16,10]) // false