//#### 1. Combining Arrays
let euroCountries = ["Germany", "Italy", "France"];
let asianCountries = ["Indian", "China", "Syria"];
// for (item of asianCountries) {
euroCountries.push(...asianCountries);
console.log(euroCountries);

let arr1 = [0, 1, 2, 3, 4];
let arr2 = [5, 6, 7, 8, 9];
let numbers = [...arr1, ...arr2];
console.log(numbers);

//#### 2. Copying Arrays
let anArray = ["this", "is", "an", "array"];
let anAnotherArray = [...anArray];
console.log(anAnotherArray);

//#### 3. Find the Largest...
let findLargest = (arr) => Math.max(...arr);
console.log(findLargest(numbers));

//#### 4. Find the Smallest
let findSmallest = (arr) => Math.min(...arr);
console.log(findSmallest(numbers));

//#### 5. Clone and Merge
const person = { name: "John" };
const job = { role: "Teacher" };

let clonedPerson = { ...person };
let employee = { ...clonedPerson, ...job };
employee.name = "Jane";
employee.role = "Babysitter";
console.log(employee);

//#### Bonus: 6.  Is the average a whole number?

let isAverageWholeNumber = (int1, int2, int3, int4) =>
  (int1 + int2 + int3 + int4) % 4 == 0 ? true : false;

console.log(isAverageWholeNumber(1, 2, 3, 4));
console.log(isAverageWholeNumber(...[1, 4, 3, 4])); //true
