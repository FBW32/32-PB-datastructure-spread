//1
let euroCities = ["berlin", "köln", "amsterdam"];
let asianCities = ["tehran", "istanbul", "baku"];
let cities = [...asianCities, ...euroCities];
console.log(euroCities);
console.log(asianCities);
console.log(cities);
let color = ["blue", "red", "pink"];
let child = ["boy", "girl"];
let colorsChild = [...color, ...child];
console.log(colorsChild);
//2
let citiesClone = [...cities];
console.log(citiesClone);
let cpyArray = citiesClone;
console.log(cpyArray);

//3
function findLargest(arr) {
  let result = Math.max(...arr);
  return result;
}
console.log(findLargest([2, 6, 83, 2]));

//4
function findSmallest(arr) {
  let result = Math.min(...arr);
  return result;
}
console.log(findSmallest([2, 6, 83, 0]));

//5
const person = { name: "John" };
const job = { role: "Teacher" };

let clonePerson = { ...person };
console.log(person);
console.log(clonePerson);

let employee = { ...person, ...job };
console.log(employee);

employee.role = "doctor";
console.log(employee);

//6
function avarage([a, b, c, d]) {
  let sum = 0;
  let arr = [a, b, c, d];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  sum = sum;
  if (sum % 4 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(avarage([1, 1, 1, 1]));
console.log(avarage([1, 9, 3, 4]));
